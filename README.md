<h1 align="center">Microsserviço de Login </h1>
<p align="center">🚀 Projeto pessoal desenvolvido em Angular e Spring Boot e orquestrado pelo Kubernetes na Azure</p>

<h4 align="center"> 
	 🐛 Finalizado!
</h4>

#
### 👉  Descrição do projeto

<p> Esse serviço foi desenvolvido em Angular/TS e Spring Boot 3, Spring Security 6, JWT e conta com uma estilização feita em Angular Material. Além disso, o processo de Deploy foi feito usando pipeline multistage (primeiro no namespace de dev e depois, se autorizado, no namespace de prod) na Azure.
 </p>
<p>A ideia é que o usuário autenticado receba um token de autorização que será armazenado no SessionStorage, persistindo a sessão até que ele feche o navegador ou até que o token tenha expirado.
</p>
<p> Também adicionei um sistema de redefinição de senha através do e-mail, de modo que o usuário possa alterar sua senha de acesso quando necessário.</p>

<p> Alguns Design Patterns foram utilizados nesse projeto, especificamente na API em spring Boot. Gostaria de destacar o padrão MVC, DTO e Repository.</p>

<p> Sinta-se à vontade para conferir o código. Caso queira baixá-lo, certifique-se de configurar corretamente suas variáveis de ambiente para a correta compilação e execução do código. </p>

### 🎁 Link do projeto

- https://loginjwt.alissonlimadev.com/
  
### ✅ Features

- [x] Login com autenticação via JWT
- [x] Orquestração em Kubernetes na Azure
- [x] Pipeline multistage (dev/prod)
- [x] Angular Material
- [x] Responsividade Mobile
- [x] Validação de tokens
- [x] Expiração de tokens após utilização (resetpassword)
- [x] Checagem de e-mail na base de dados
- [x] Cadastramento de e-mail
- [x] Redefinição de senha
- [x] API Java Mail (SMTP)
- [x] Formulários Reativos

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Spring Boot](https://spring.io/projects/spring-boot)
- [JWT Token](https://jwt.io/)
- [Spring Security](https://spring.io/projects/spring-security)
- [Angular 15](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Docker](https://rxjs.dev/)
- [Java Mail](https://www.oracle.com/java/technologies/javamail-api.html)
- [SCSS](https://sass-lang.com/)
- [NGX-TOASTR](https://www.npmjs.com/package/ngx-toastr)
- [Azure](https://azure.com/)
- [Docker](https://hub.docker.com/)

## 👨‍🎓 Autor

<a href="https://github.com/alissonlimabr">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/101370736?s=400&u=00839cadc5eaa54e04b68f6efbc1582eedf4e080&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Alisson Lima</b></sub></a> <a href="https://github.com/alissonlimabr" title="GitHub">🚀</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@amlxd5-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/amlxd5)](https://twitter.com/amlxd5) [![Linkedin Badge](https://img.shields.io/badge/-Alisson-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alisson-ml/)](https://www.linkedin.com/in/alisson-ml/) 
[![Gmail Badge](https://img.shields.io/badge/-amlxd5@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:amlxd5@gmail.com)](mailto:amlxd5@gmail.com)

## 📝 Licença

Esse projeto é licenciado pelo [MIT](./LICENSE).
