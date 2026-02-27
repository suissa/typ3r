# time.epochTime

Representa um horário como timestamp numérico (milissegundos desde 1970-01-01 UTC).

## Definição
- **Brand**: `time.epochTime`
- **Primitivo base**: number
- **Descrição**: Representa um horário como timestamp numérico (milissegundos desde 1970-01-01 UTC).

## Operações
- `of(v: unknown): EpochTime` → cria um valor do tipo
- `un(v: EpochTime): number` → extrai o valor base

## Exemplo

```ts
import { EpochTime } from "./epochTime";

const v = EpochTime.of(1234567890);
console.log(EpochTime.un(v));
```
