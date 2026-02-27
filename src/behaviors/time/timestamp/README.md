# time.timestamp

Instante absoluto no tempo representado como objeto Date.

## Definição
- **Brand**: `time.timestamp`
- **Primitivo base**: Date
- **Descrição**: Instante absoluto no tempo representado como objeto Date.

## Operações
- `of(v: unknown): Timestamp` → cria um valor do tipo
- `un(v: Timestamp): Date` → extrai o valor base

## Exemplo

```ts
import { Timestamp } from "./timestamp";

const v = Timestamp.of("2024-01-01T00:00:00Z");
console.log(Timestamp.un(v));
```
