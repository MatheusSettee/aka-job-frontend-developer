# Desafio Frontend AkaSoft

## Resolução do Teste

Inicialmente dei uma estudada na documentação das tecnologias usadas (Nextjs e Mantine) no desafio. Decidi por utilizar o Mantine por ser a biblioteca sugerida pela empresa.

No primeiro dia, foquei principalmente em criar e entender os funcionamentos do Next, criei o projeto baseado no getting started da documentação do Next e instalei as dependências do Mantine.

No segundo dia, gastei boa parte do tempo fazendo o header e tentando ajustar corretamente os alinhamentos e distanciamentos, porém, inicialmente tinha colocado ele diretamente na página principal no qual seria um problema para a escalabilidade, pois, caso fossem adicionadas outras páginas existiria repetição de código. Após perceber isso, coloquei ele diretamente no layout e iniciei a criação da página principal. Posteriomente, pesquisei melhor e percebi que o ideal seria que o header(Navbar) deveria ser um componente e voltei minha atenção a ele.

No terceiro dia, finalizei a página principal e percebi que estavam acontecendo alguns bugs na responsividade e no background e voltei minha atenção a isso, após corrigido, resolvi colocar uma pequena animação fadeIn na imagem dos cartões e ajustei a responsividade da página principal e do header. Após finalizado, resolvi criar mais duas páginas ilustrativas apenas para entender melhor como funcionam as rotas no Next e fiz o deploy no vercel.

## Deploy no Vercel

Você pode acessar meu deploy do app Next.js no [link](https://aka-job-frontend-developer-taupe.vercel.app/).

## Rodando o Projeto

É necessário ter o Node instalado na sua máquina.

Primeiramente, faça o clone ou download do [repositório](https://github.com/MatheusSettee/aka-job-frontend-developer). 

Após efetuado o primeiro passo, abra seu terminal ou editor de texto e rode os seguintes comandos:

```bash
npm install
# depois 
npm run dev
```
