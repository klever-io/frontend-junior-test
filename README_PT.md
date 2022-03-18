# Klever - Teste Frontend Junior

Olá, este é o teste Frontend para desenvolvedores juniores da Klever. O objetivo é analisar as habilidades dos candidatos, com foco nos fundamentos básicos de HTML, CSS e JS.

## Páginas

Todas as imagens das páginas estão na pasta `./screens`

### 1) Home

![Home](/public/screens/Home.jpg)

#### Ações

- Ao clicar no botão "Add Token" vá para a página "Add Token"
- Ao clicar no ícone "Edit" vá para a página "Edit Token"

### 2) Add token

![Adicionar token](/public/screens/AddToken.jpg)

#### Forma

- O campo Token é obrigatório
- O campo Balance é obrigatório

#### Ações

- Ao clicar no botão "Back" vá para a página "Home"
- Ao clicar no ícone "Save" botão
  - Salve os dados no localStorage do navegador
  - Navegar o usuário para a página Home

#### Bônus

- O nome do Token deve ser único, o usuário não deve ter nomes de token repetidos
- Exibir as mensagens de erro do formulário para o usuário

### 3) Edit token

![Editar token](/public/screens/EditToken.jpg)

#### Ações

- Ao clicar no botão "Back" vá para a página "Home"
- Ao clicar no botão "Save"
  - Salve os dados no localStorage
  - Navegar o usuário para a página Home
- Ao clicar no botão "Remove"
  - Remova a data do armazenamento local
  - Navegar o usuário para a página Home

#### Bônus

- Quando o usuário clicar no botão "Remove" deverá exibir um alerta ao usuário para confirmar a remoção.
  - Se confirmado, o token deve ser excluído
  - Se negado, o alerta fecha e o token não deve ser excluído,

## Assets

Todos os ativos estão na pasta `./assets`

## Bônus

- Use o React Framework
- Testes Unitários

## PERGUNTAS FREQUENTES

1. Posso usar HTML, CSS, JS?

- Sim

2. Posso usar outros frameworks javascript?

- Sim

3. Posso usar algum framework CSS como Bootstrap, Material UI?

- Sim e tente seguir o design proposto
