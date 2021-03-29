<p align="center"><a href="https://laravel.com" target="_blank">
<img src="https://github.com/fabinhoc/sys-bank-frontend/tree/main/src/assets/logo-purple.png" width="100">
<br>
<span style="color:white">SYSBANK</span>
</a></p>

## Pré-requisitos
O projeto foi desenvolvido utilizando o [VUEjs](https://vuejs.org/) um framework javascript progressivo.
Instalar o gerenciador de pacote [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable).

## Instalação
```
git clone https://github.com/fabinhoc/sys-bank-frontend
```

```
$ ~/ cd sys-bank-frontend
$ ~/sys-bank-frontend/ yarn install
```

Após a instalação do projeto crie um arquivo ``` .env ``` na raiz do diretório e inclua as seguintes variáveis de ambiente:

```
VUE_APP_CLIENT_ID=SEU_CLIENT_ID
VUE_APP_CLIENT_SECRET=SEU_CLIENT_SECRET
VUE_APP_API_URL=URL_DO_BACKEND EX:http://localhost:8000
```
**ATENÇÃO: Essas informações você consegue seguindo os passos para rodar o backend da aplicação nesse repositório [https://github.com/fabinhoc/sys-bank](https://github.com/fabinhoc/sys-bank)**

Após a alteração é somente executar o comando
```
yarn serve
```
Acesse a url
http://localhost:8080/login

![image-page-login](https://github.com/fabinhoc/sys-bank-frontend/tree/main/src/assets/login-page.PNG)

## Repositório do backend
Acesse este repositório [https://github.com/fabinhoc/sys-bank](https://github.com/fabinhoc/sys-bank) para ter acesso ao backend do projeto.
