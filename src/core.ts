
// src/core.ts
// Ghostmark core — Semantic Phantom Types
declare const __brand: unique symbol;
export type Brand<T, B extends string> = T & { readonly [__brand]: B };

export type Bool<Name extends string> = Brand<boolean, `bool:${Name}`>;
export type Num<Name extends string>  = Brand<number,  `num:${Name}`>;
export type Str<Name extends string>  = Brand<string,  `str:${Name}`>;

export const makeBool = <N extends string>(name: N) => ({
  of: (v: boolean) => v as Bool<N>,
  un: (v: Bool<N>) => v as boolean,
});
export const makeNum = <N extends string>(name: N) => ({
  of: (v: number) => v as Num<N>,
  un: (v: Num<N>) => v as number,
});
export const makeStr = <N extends string>(name: N) => ({
  of: (v: string) => v as Str<N>,
  un: (v: Str<N>) => v as string,
});

export type BrandAll<T, Names extends string> = { [K in Names]: Brand<T, K> };