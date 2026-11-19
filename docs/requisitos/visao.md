# Visão — E-mail no rodapé (#2)

## Problema

Visitantes que rolam até o final da landing page não encontram um canal de e-mail no rodapé. O endereço já aparece na seção **Contato**, mas o rodapé expõe apenas o link para a Política de Privacidade e o aviso de copyright — o que dificulta contato rápido a partir de qualquer ponto da página.

## Personas

| Persona | Necessidade |
|---------|-------------|
| **Visitante em avaliação** | Encontrar e-mail institucional sem voltar à seção Contato |
| **Cliente em suporte/LGPD** | Acessar o mesmo e-mail usado na política de privacidade |
| **Equipe COMPLEXTI** | Manter um único endereço público (`desenvolvimento@complexti.com.br`) em todos os pontos de contato |

## Objetivos

1. Exibir o e-mail institucional no rodapé da página principal.
2. Oferecer link `mailto:` para abrir o cliente de e-mail do usuário.
3. Reutilizar o endereço já definido no site (sem novo cadastro de conteúdo).

## Métricas de sucesso

- E-mail visível no rodapé em viewport desktop e mobile.
- Clique no link abre composição para `desenvolvimento@complexti.com.br`.
- Nenhuma regressão visual no layout do rodapé (lint/build OK).

## Encaminhamento

- **ux-ui-designer:** validar hierarquia (e-mail × privacidade × copyright) e hover alinhado ao design system (verde `#22c55e` / `green-400`).
- **arquiteto-software:** alteração somente em `Footer` em `src/App.tsx`; sem API nem banco.