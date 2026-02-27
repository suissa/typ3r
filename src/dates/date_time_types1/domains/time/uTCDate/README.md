# time.uTCDate

Representa uma data no fuso horário UTC (ano, mês, dia).

## Definição
- **Brand**: `time.uTCDate`
- **Primitivo base**: Date
- **Descrição**: Representa uma data no fuso horário UTC (ano, mês, dia).

## Operações
- `of(v: unknown): UTCDate` → cria um valor do tipo
- `un(v: UTCDate): Date` → extrai o valor base

## Exemplo

```ts
import { UTCDate } from "./uTCDate";

const v = UTCDate.of("2024-01-01T00:00:00Z");
console.log(UTCDate.un(v));
```
