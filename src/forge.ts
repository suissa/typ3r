// src/AtomicBehaviorTypes/forge.ts
declare const __AtomicType: unique symbol;

export type AtomicType<T, Name extends string> = T & {
  readonly [__AtomicType]: Name;
};

export function BehaviorType<Name extends string>() {
  return {
    of: <T>(v: T) => v as AtomicType<T, Name>,
    un: <T>(v: AtomicType<T, Name>) => v as unknown as T,
  };
}
