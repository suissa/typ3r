# time.localDate

Representa uma data local (ano, mês, dia) sem informação de fuso horário.

## Definição
- **Brand**: `time.localDate`
- **Primitivo base**: Date
- **Descrição**: Representa uma data local (ano, mês, dia) sem informação de fuso horário.

## Operações
- `of(v: unknown): LocalDate` → cria um valor do tipo
- `un(v: LocalDate): Date` → extrai o valor base

## Exemplo

```ts
import { LocalDate } from "./localDate";

const v = LocalDate.of("2024-01-01T00:00:00Z");
console.log(LocalDate.un(v));
```
