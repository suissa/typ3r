const fs = require("fs");
const path = require("path");
const os = require("os");

/**
 * Helper function to create a temporary test project
 */
function createTestProject(baseDir, typeFiles = {}) {
  const projectDir = path.join(baseDir, "test-project");
  
  if (fs.existsSync(projectDir)) {
    fs.rmSync(projectDir, { recursive: true, force: true });
  }
  fs.mkdirSync(projectDir, { recursive: true });
  
  const srcDir = path.join(projectDir, "src");
  fs.mkdirSync(srcDir, { recursive: true });
  
  // Create type files
  for (const [fileName, content] of Object.entries(typeFiles)) {
    const filePath = path.join(srcDir, fileName);
    fs.writeFileSync(filePath, content);
  }
  
  return projectDir;
}

/**
 * Helper function to clean up test directories
 */
function cleanupTestDirs(...dirs) {
  for (const dir of dirs) {
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  }
}

/**
 * Helper function to mock CLI module properties temporarily
 */
function mockCliProperty(cliModule, property, newValue) {
  const originalValue = cliModule[property];
  Object.defineProperty(cliModule, property, {
    value: newValue,
    writable: true
  });
  
  return () => {
    // Restore function to restore original value
    Object.defineProperty(cliModule, property, {
      value: originalValue,
      writable: true
    });
  };
}

/**
 * Helper function to create test global directory
 */
function createTestGlobalDir(baseName = ".test_global_shared") {
  const globalDir = path.join(os.tmpdir(), baseName);
  if (fs.existsSync(globalDir)) {
    fs.rmSync(globalDir, { recursive: true, force: true });
  }
  fs.mkdirSync(globalDir, { recursive: true });
  return globalDir;
}

module.exports = {
  createTestProject,
  cleanupTestDirs,
  mockCliProperty,
  createTestGlobalDir
};