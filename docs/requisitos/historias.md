# Histórias de usuário — #2

## HU-001 — E-mail no rodapé da home

**Como** visitante da landing page, **quero** ver o e-mail da COMPLEXTI no rodapé, **para** entrar em contato sem rolar até a seção Contato.

**Regras:** RN-001, RN-002, RN-003

### Critérios de aceite

```gherkin
Cenário: E-mail visível no rodapé
  Dado que estou na página inicial da COMPLEXTI
  Quando visualizo o rodapé da página
  Então devo ver o endereço "desenvolvimento@complexti.com.br" exibido como link

Cenário: Abrir cliente de e-mail
  Dado que estou na página inicial da COMPLEXTI
  Quando clico no link de e-mail no rodapé
  Então o navegador deve abrir uma ação mailto para "desenvolvimento@complexti.com.br"

Cenário: Cliente de e-mail indisponível (erro/degradação)
  Dado que estou na página inicial e meu dispositivo não possui app de e-mail configurado
  Quando clico no link de e-mail no rodapé
  Então o sistema operacional pode exibir aviso de impossibilidade de abrir mailto
  E o endereço continua visível e selecionável no rodapé para cópia manual
```