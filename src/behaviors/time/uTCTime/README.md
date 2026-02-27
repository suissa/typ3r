# time.uTCTime

Representa um horário absoluto no fuso horário UTC.

## Definição
- **Brand**: `time.uTCTime`
- **Primitivo base**: Date
- **Descrição**: Representa um horário absoluto no fuso horário UTC.

## Operações
- `of(v: unknown): UTCTime` → cria um valor do tipo
- `un(v: UTCTime): Date` → extrai o valor base

## Exemplo

```ts
import { UTCTime } from "./uTCTime";

const v = UTCTime.of("2024-01-01T00:00:00Z");
console.log(UTCTime.un(v));
```
