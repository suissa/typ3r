# time.epochDate

Representa uma data como timestamp numérico (milissegundos desde 1970-01-01 UTC).

## Definição
- **Brand**: `time.epochDate`
- **Primitivo base**: number
- **Descrição**: Representa uma data como timestamp numérico (milissegundos desde 1970-01-01 UTC).

## Operações
- `of(v: unknown): EpochDate` → cria um valor do tipo
- `un(v: EpochDate): number` → extrai o valor base

## Exemplo

```ts
import { EpochDate } from "./epochDate";

const v = EpochDate.of(1234567890);
console.log(EpochDate.un(v));
```
