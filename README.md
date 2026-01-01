# One‑Typer‑4‑All

> **Local Package Manager for Type Definitions**
>
> _"Um gerenciador de pacotes local focado exclusivamente em arquivos de tipos, que sincroniza o estado global (uma pasta na home do usuário) com o estado local do projeto. Ideal para arquiteturas de microsserviços ou para manter consistência tipográfica entre múltiplos projetos dentro da mesma organização._"

---

## 📦 Instalação

```bash
# Instalação local (para desenvolvimento)
cd path/to/one-typer-4-all
wsl bun i   # ou npm i
```

Para usar globalmente (via `npx` ou como comando instalado):

```bash
# Instalação global (opcional)
wsl bun i -g .   # ou npm i -g .
```

Depois disso os seguintes comandos estarão disponíveis:

- `one-typer-4-all`
- `mytyper`
- `onetyper`
- `onetyper4all`

## 🛠️ Como foi feito

- **CLI** em `src/cli.js` que varre o diretório `src` em busca de arquivos `*.type.ts` (ou `*.interface.ts`).
- **Sincronização Global**: copia os arquivos encontrados para `~/.purecore/atomicbehaviortypes/shared` – um repositório de tipos compartilhado entre todos os projetos do usuário.
- **Linkagem Local**: cria _symlinks_ (ou cópias, caso o usuário não tenha permissão) dentro de `src/types/shared` apontando para os arquivos globais, garantindo que o TypeScript os reconheça sem necessidade de dependências externas.
- **Gerador de `index.ts`**: monta um arquivo de exportação central que re‑exporta tudo que está em `src/types/shared`.
- **Bin entries** no `package.json` permitem execução direta (`npx one-typer-4-all`) ou instalação global.

## 🚀 Como funciona

1. **Harvest** – o comando `harvestTypes()` coleta todos os arquivos de tipos do projeto e os grava na pasta global.
2. **Link** – `linkTypes()` cria os _symlinks_ locais apontando para a pasta global.
3. **Index** – `generateIndex()` gera `src/types/index.ts` que exporta tudo, permitindo `import { Foo } from "src/types"` em qualquer módulo.
4. **Execução** – ao rodar `one-typer-4-all` (ou qualquer alias) o fluxo acima ocorre automaticamente, mantendo o repositório de tipos sempre atualizado.

## 🎮 Como usar

```bash
# Atualiza os tipos e gera o index
one-typer-4-all
```

Ou, usando npm scripts (útil durante desenvolvimento):

```bash
npm run one-typer-4-all   # ou mytyper, onetyper, onetyper4all
```

Depois disso basta importar os tipos normalmente:

```ts
import { User, Order } from "src/types";
```

## 🧪 Como testar

1. **Teste manual** – Crie um arquivo `example.type.ts` em qualquer lugar dentro de `src`. Rode o CLI e verifique que:
   - O arquivo foi copiado para a pasta global (`~/.purecore/...`).
   - Um _symlink_ foi criado em `src/types/shared/example.type.ts`.
   - O `src/types/index.ts` contém a linha `export * from './shared/example.type';`.
2. **Teste automatizado** – Você pode escrever um teste Jest/Bun que:
   - Executa `wsl bun run ./src/cli.js` em um diretório temporário.
   - Usa `fs.existsSync` para confirmar a presença dos arquivos esperados.
   - Verifica que o conteúdo do `index.ts` corresponde ao esperado.

---

## 💭 Minha opinião

> **Por que isso é interessante para o futuro?**
>
> Em ambientes de microsserviços, a consistência tipográfica entre serviços é um desafio constante. Cada equipe costuma duplicar definições de DTOs, contratos de API ou modelos de domínio, o que gera divergência e bugs silenciosos. O _One‑Typer‑4‑All_ resolve esse problema ao centralizar **apenas** os arquivos de tipos – nada mais, nada menos. O resultado é um ecossistema onde os tipos são a única fonte de verdade, versionados de forma implícita pelo próprio repositório de código. Quando um novo serviço nasce, basta rodar o CLI e ele já tem acesso a todas as definições compartilhadas, sem precisar publicar pacotes NPM ou gerenciar dependências internas. Essa abordagem reduz a fricção, melhora a produtividade e garante que mudanças de contrato sejam propagadas instantaneamente a todos os consumidores.
>
> Além disso, por ser **local** (não depende de um registro remoto), ele funciona perfeitamente em ambientes offline ou em pipelines CI que não têm acesso à internet, mantendo a segurança e a velocidade de builds.
>
> Em resumo, vejo este projeto como um pequeno, porém poderoso, bloco de construção para arquiteturas tip‑first modernas, onde a **coerência** e a **agilidade** são cruciais.
