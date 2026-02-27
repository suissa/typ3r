# time.duration

Representa uma duração em milissegundos.

## Definição
- **Brand**: `time.duration`
- **Primitivo base**: number
- **Descrição**: Representa uma duração em milissegundos.

## Operações
- `of(v: unknown): Duration` → cria um valor do tipo
- `un(v: Duration): number` → extrai o valor base

## Exemplo

```ts
import { Duration } from "./duration";

const v = Duration.of(1234567890);
console.log(Duration.un(v));
```
