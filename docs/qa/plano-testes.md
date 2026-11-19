# Plano de testes — #2 E-mail no rodapé

## Matriz história × casos

| História | Caso | Tipo | Automatizado |
|----------|------|------|--------------|
| HU-001 | CT-001 E-mail visível no rodapé | Feliz | Não |
| HU-001 | CT-002 Clique abre mailto | Feliz | Não |
| HU-001 | CT-003 Hover/cores consistentes | Borda | Não |
| HU-001 | CT-004 Layout mobile (empilhamento) | Borda | Não |
| — | CT-005 `npm run lint` | Regressão | CI local |
| — | CT-006 `npm run build` | Regressão | CI local |

## Procedimentos manuais

### CT-001

1. `npm run dev` ou abrir build em preview.
2. Rolar até o rodapé.
3. **Esperado:** link `desenvolvimento@complexti.com.br` visível ao lado de Política de Privacidade.

### CT-002

1. Clicar no link do e-mail.
2. **Esperado:** cliente de e-mail com destinatário `desenvolvimento@complexti.com.br`.

### CT-004

1. Reduzir viewport &lt; 640px.
2. **Esperado:** itens do rodapé empilham sem sobreposição ou corte de texto.

## Status

Executar após merge da implementação; suíte automatizada E2E não existe no repositório.