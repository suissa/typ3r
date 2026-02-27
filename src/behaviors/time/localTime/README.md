# time.localTime

Representa um horário local no formato HH:mm:ss.

## Definição
- **Brand**: `time.localTime`
- **Primitivo base**: string
- **Descrição**: Representa um horário local no formato HH:mm:ss.

## Operações
- `of(v: unknown): LocalTime` → cria um valor do tipo
- `un(v: LocalTime): string` → extrai o valor base

## Exemplo

```ts
import { LocalTime } from "./localTime";

const v = LocalTime.of(1234567890);
console.log(LocalTime.un(v));
```
