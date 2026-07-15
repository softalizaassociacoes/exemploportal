# Exemplo Portal Softaliza

Portal único de demonstrações comerciais para grandes associações.

O endereço-base é `https://exemploportal.vercel.app/`. Cada proposta ganha uma rota própria dentro deste mesmo projeto, preservando a estrutura e o histórico em um único lugar.

## Rotas atuais

| Rota | Demonstração |
| --- | --- |
| `/` | Portal institucional genérico, usado como modelo base. |
| `/sbmh` | MVP de novo portal para a Sociedade Brasileira de Medicina Marítima e Hiperbárica. |

## Convenção para novas propostas

1. Criar uma rota curta usando a sigla ou o nome da entidade em minúsculas.
2. Manter a página inicial como modelo genérico.
3. Personalizar a nova rota com identidade, conteúdo e jornadas relevantes para aquela negociação.

Exemplos: `/aborl`, `/sobraep` e `/nome-da-entidade`.

## Desenvolvimento

```bash
npm install
npm run dev
npm run build
```
