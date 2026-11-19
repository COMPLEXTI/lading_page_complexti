# Dúvidas abertas — #2

| ID | Pergunta | Impacto se não respondida |
|----|----------|---------------------------|
| D-001 | O e-mail deve aparecer também no rodapé da página `/privacidade`? | Mantém-se apenas na home; página de privacidade continua só com link para o site. |
| D-002 | Devemos exibir rótulo "E-mail:" ou apenas o endereço? | Implementação atual: endereço como texto do link (padrão da seção Contato). |
| D-003 | Desejam extrair `CONTACT_EMAIL` para um módulo compartilhado (`src/constants.ts`)? | Duplicação permanece entre `App.tsx` e `PrivacyPolicy.tsx` (comportamento já existente). |