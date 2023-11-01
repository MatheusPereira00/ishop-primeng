<h1 align="center">
   matheus Shop
</h1>

<br>

## 💻 Projeto
Frontend do projeto matheus Shop, um ecommerce a ser desenvolvido com 
Angular e Spring Boot, para aperfeiçoamento e treinamento em desenvolvimento Web dos Associates da matheus dentro da conta Santander.

## 🔖 Layout

- [Design System](https://www.figma.com/file/qDPfAfx992mlqDVxNf9iJF/Layout-E-Commerce-Santander?node-id=0%3A1&t=NruuEojCAXf8SlPs-0)

- [Layout Desktop](https://www.figma.com/file/qDPfAfx992mlqDVxNf9iJF/Layout-E-Commerce-Santander?node-id=1%3A2&t=NruuEojCAXf8SlPs-0)

- [Layout Mobile](https://www.figma.com/file/qDPfAfx992mlqDVxNf9iJF/Layout-E-Commerce-Santander?node-id=4%3A3&t=NruuEojCAXf8SlPs-0)

<br>

## ✨ Tecnologias
<br>
<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=angular,rxjs,ts,scss,css,html" />
  </a>
</p>
<br>

## ⚙️ Extensões VsCode

- [Angular Language Service](https://marketplace.visualstudio.com/items?itemName=Angular.ng-template)

- [vscode-angular-html](https://marketplace.visualstudio.com/items?itemName=ghaschel.vscode-angular-html)

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)

<br>

## 📆 Objetivos Sprint 1

- Criação do layout base da aplicação (Header, Sidebar, Footer e Conteúdo);
  * Inclusão da estrutura (HTML + CSS) base da aplicação com responsibidade para adaptação Desktop e Mobile conforme layout.
- Inclusão dos ícones do header e menu lateral;
  * Inclusão do ícones conforme apresentado nos protótipos obrigatoriamente com SVG Sprites.
- Criação do componente de paginação;
- Criação do componente dialog de confirmação;
- Criação do componente de loading para espera de carregamentos demorados;
- Criação do módulo de produtos.
  * Inclusão das rotas com estratégia de lazy loading;
  * Criação do componente de card do produto;
  * Criação do serviço de produtos para gerenciamento de estado dos produtos;
  * Exibição dos produtos na tela atraves de integração com base fake de dados.

## 📆 Objetivos Sprint 2
 - Módulo de Carrinho
    * Criação da página com os produtos que foram adicionados no carrinho;
    * O usuário deve conseguir adicionar e remover os itens do carrinho;
    * O usuário deve conseguir excluir itens do carrinho;
    * O usuário deve conseguir aumentar e diminuir a quantidade dos itens do carrinho;
    * Ao atualizar a página o usuario nao pode perder os itens que adicionou no carrinho ( Storage).
  - Módulo de Checkout
    * O usuário deve preencher um formulário com dados para finalizar a compra ( nome, endereço método de pagamento);
    * O usuário não pode deixar com campos obrigatórios vazios (validação de form);
    * Ao finalizar não teremos um backend para salvar, mas vamos criar um método de submit para quando tivermos o backend.
  - Notificações 
    * O usuário deve receber alertas ao realizar algumas ações específicas na aplicação, como por exemplo um taost ao excluir um item retornando "você tem certeza que deseja excluir esse item?";
    * success, warning and danger alerts.

## 📆 Objetivos Sprint 3
  - Layout principal
    * Alterar a estruturação de css do layout. Manter o menu e o header fixo conforme o usuário navega ao longo da página (scrollY);
    * Criar no header um botão com a funcionalidade para exibir/ocultar o menu lateral.

       Demo:
      ![interface](src/assets/images/layout.gif 'Erros Validations')

  - Módulo de Checkout
    * Criação de um componente customizado para validação de campos.

      - Utilizar o [ControlContainer](https://angular.io/api/forms/ControlContainer), que permite realizar controle de um formulário reativo em outros componentes e serviços;
      - Este componente deve receber um input obrigatório, o controlName, que rebece o campo atual a ser validado;
      - Este compomente deve verificar todos os erros possíveis no campo em questão, por exemplo:

         Demos:
        ![interface](src/assets/images/custom-validation.png 'Custom Validator Demo')

        ![interface](src/assets/images/errors-validations.png 'Erros Validations Demo')
      
      - Em resumo, este componente customizado vai receber o controle deste formulário para o campo específico e renderizar um list de parágrafos com todos os erros do campo em questão.
    * Criação serviço de cep
      - Criar um serviço que recebe um número de cep e retorna as outras informações do endereço (Rua, Bairro, Cidade, etc...);
      - Conforme o usuário digitar um cep, chamar o serviço, recuperar os dados do endereço e popular os campos do formulário.

        Demo:
        ![interface](src/assets/images/via-cep-demo.gif 'Via Cep Demo')

      - Sugestão de API: [ViaCep](https://viacep.com.br/)

  - Internacionalização
      - Escolher uma biblioteca de internacionalização (i18n) e traduzir todos os textos da aplicação, deixar as opções ingles e português.
      - Criar no menu lateral um select para alterar entre os idiomas.
      - Sugestão de Biblioteca: [Transloco](https://ngneat.github.io/transloco/)

        Demo:
        ![interface](src/assets/images/i18n.gif 'Internacionalização Demo')

  - Tema Escuro e claro
      - Criar novas paletas de cores pra todas as variaveis ja existentes (invertendo o rgb). Seguestão pra inverter as cores: [Color inverter](https://colorinverter.imageonline.co/)
      - Criar funcionalidade para alterar as paletas, permitindo trocar entre temas escuro e claro.
      - Criar no menu lateral um 'Switch' e colocar nele a funcionlidade de inversão do tema.

        Demo:
        ![interface](src/assets/images/theme.gif 'Dark Theme Switch Demo')

  - Interceptor
    - Criar um interceptor que vai "escutar" todas as nossas requisições http e tratar globalmente os erros
    - Em casos de falhas, o interceptor deve re-executar a requisição mais duas vezes.

      Demo:
      ![interface](src/assets/images/interceptor.gif 'Interceptor Demo')

## 📆 Objetivos Sprint 5
  - Css Geral
      * Substituir todo Css criado por componentes de alguma biblioteca de componentização como por exemplo o [PrimeNg](https://primeng.org/);
      * Utilizar o [PrimeFlex](https://primeflex.org/) para auxílio na estilização dos componentes. 
  - Módulo de filtros
      * No Sidebar criar os componentes para filtrar os produtos. Os filtros devem ser de:
        - Preço (Slider para selecionar valor mínimo e valor máximo);
        - Categoria: Criar um checkbox para cada categoria que se deseja selecionar;
        - Criar uma sequência de 5 ícones em formato estrela para selecionar a avaliação que deseja filtrar.
  - Módulo de descontos
      * No Header criar um novo ícone que ao clicar vai abrir um modal contendo um carrosel exibindo a listagem de produtos em desconto
      * Para recuperar os produtos com desconto, deve-se chamar a api de descontos que traz uma lista de produtos.

## 📑 Referências

- [Angular](https://angular.io/)

- [TypeScript](https://www.typescriptlang.org/)

- [SVG Sprites](https://willianjusten.com.br/usando-svg-sprites)

