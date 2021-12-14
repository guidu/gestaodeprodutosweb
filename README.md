# Quasar App (gestaodeprodutosweb)

Primeira app com quasar

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://v2.quasar.dev/quasar-cli/quasar-conf-js).

## configuração ESLint 
Após conhecer o Guia de Estilo do Vue.js, eu pensei imediatamente em duas coisas: que bom que existe um guia que vai nos ajudar a padronizar nosso código e que pena que para isso ter resultado, vamos ter que aprender e nos acostumar com mais de 30 regras.
O ESLint é uma ferramenta de validação estática de código para detectar quando alguns padrões não estão sendo seguidos. As linguagens de programação mais populares contam com ferramentas desse tipo e o JavaScript tem o ESLint (que também serve para JSX).
Na análise do código, o ESLint leva em consideração um conjunto de regras definidas para o projeto. A ferramenta permite uma alta personalização por meio de um conjunto de regras que podem ser habilitadas, desabilitadas e configuradas com parâmetros. Também é possível utilizar plugins.
Um desses plugins é o plugin oficial do Vue.js e ele serve exatamente para ajudar a seguir o Guia de Estilo. O ESLint vai analisar o código e apontar um erro quando alguma regra for quebrada. Além disso, dependendo do erro, o ESLint é capaz de fazer correções automáticas. Caso você decida não seguir alguma regra, é possível utilizar a flexibilidade do ESLint e desabilitá-la.
Vue.js + ESLint + VS Code
Agora vamos às configurações. Você vai instalar o ESLint, mais algumas dependências no projeto via NPM e configurar o editor.
Primeiro instale o ESLint.
npm install -g eslint
Considerando que você já tem um projeto, é só instalar as dependências. O comando abaixo precisa ser executado na raiz do projeto.
npm install --save-dev babel-eslint babel-preset-es2015 babel-preset-stage-0 eslint eslint-plugin-vue
Depois disso, você precisa criar o arquivo de configuração do ESLint no projeto. Na raiz, crie o arquivo .eslintrc.json com esse conteúdo:

Agora o projeto já tem as configurações que precisa e só falta configurar o editor. Minha recomendação é o VS Code. A configuração é simples: são duas extensões e algumas linhas no arquivo de configuração. As extensões são: ESLint e Vetur. Para adicionar as configurações, clique no ícone de engrenagem do VS Code (canto inferior esquerdo), selecione Configurações e adicione as linhas abaixo:

Depois disso, reinicie o VS Code e a configuração está feita.
Com tudo configurado, o ESLint vai começar a fazer seu trabalho e isso tira o peso de ter que decorar todo o Guia de Estilo do Vue.js. Ainda assim é bom ler e entender cada uma das regras, porque isso serve como aprendizado sobre qualidade de código. Uma última sugestão é documentar essa configuração no README do seu projeto e incentivar os outros desenvolvedores a manter a mesma configuração.