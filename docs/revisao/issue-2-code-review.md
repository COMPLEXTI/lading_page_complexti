# Revisão de código — #2 (Renata)

**Escopo:** `src/App.tsx` (componente `Footer`)

## Achados

Nenhum achado bloqueante.

| Severidade | Local | Observação |
|------------|-------|------------|
| 🟡 Sugestão | `Footer` | No futuro, considerar `aria-label` se o texto do link for abreviado (não aplicável: endereço completo visível). |
| 🟡 Sugestão | `PrivacyPolicy.tsx` | Rodapé da política ainda sem e-mail; alinhar se D-001 for confirmada. |

## Veredito

**Aprovar** — reutiliza `CONTACT_EMAIL`, `mailto` correto, classes alinhadas ao link de privacidade, sem risco XSS (literal constante).