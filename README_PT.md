# Teste Frontend Klever Junior

Olá, este é o teste Frontend para desenvolvedores juniores da Klever. O objetivo é analisar as habilidades dos candidatos, com foco nos fundamentos básicos de HTML, CSS e JS.

## Páginas

### Home

#### Ações

- Ao clicar no botão "Add Token" vá para a página "Add Token"
- Ao clicar no ícone "Editar" vá para a página "Edit Token"

### Add token

#### A partir de

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

### Edit token

#### Ações

- Ao clicar no botão "Back" vá para a página "Home"
- Ao clicar no botão "Save"
  - Salve os dados no localStorage
  - Navegar o usuário para a página inicial
- Ao clicar no botão "Remove"
  - Remova a data do armazenamento local
  - Navegar o usuário para a página inicial

#### Bônus

- Quando o usuário clicar no botão "Remove" deverá exibir um alerta para usuário confirmar a remoção.
  - Se confirmado, o token deve ser excluído
  - Se negado, o alerta fecha e o token não é excluído

## Bonus

- Usar o Framework React
- Testes Unitários
