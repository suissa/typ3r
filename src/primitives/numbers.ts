
// src/domains/numbers.ts
import type { Num, Brand } from '../core';
import { makeNum } from '../core';

/** TIME */
export type Time = Num<'DurationMs'>;
export const Time = makeNum('DurationMs');

/** MONEY */
export type Money<C extends string = 'BRL'> = Num<`Money<${C}>`>;

export const BRL = { of: (n: number) => n as Money<'BRL'> };
export const USD = { of: (n: number) => n as Money<'USD'> };

export const addMoney = <C extends string>(a: Money<C>, b: Money<C>): Money<C> =>
  (((a as unknown as number) + (b as unknown as number)) as Money<C>);

export const formatBRL = (m: Money<'BRL'>) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(m as unknown as number);

/** COUNT / QUANTITIES */
export type Count = Num<'Count'>;
export function asCount(n: number): Count {
  if (!Number.isInteger(n) || n < 0) throw new Error('Count deve ser inteiro ≥ 0');
  return n as Count;
}

export type Size     = Num<'Size'>;
export type Quantity = Num<'Quantity'>;

/** TOTAL<T> */
export type Total<T> = Brand<T, 'Total'>;
export const asTotal = <T>(v: T) => v as Total<T>;

/** Domain-specific aliases */
export type BasePrice = Money<'BRL'>;
export type RevenueTotal = Total<Money<'BRL'>>;
export type TotalAppointments = Total<Count>;
export type TeethExtracted = Quantity;
export type ScheduleSize = Size;