# Requisitos não funcionais — #2

## Desempenho

Alteração estática em HTML renderizado; impacto desprezável no LCP e no bundle.

## Disponibilidade

Sem dependência de backend; comportamento igual em build estático e em `server.cjs`.

## Segurança e LGPD

Exibição de dado de contato corporativo já público; sem coleta adicional de dados pessoais. Link `mailto:` não envia dados ao servidor da COMPLEXTI.

## Acessibilidade

Link com texto legível (endereço de e-mail ou rótulo equivalente); contraste alinhado aos links existentes do rodapé; foco visível via estilos padrão do navegador/Tailwind.

## Compatibilidade

Browsers modernos (Chrome, Firefox, Safari, Edge) em desktop e mobile. Apps nativos Android/iOS fora do escopo desta landing (apenas web).