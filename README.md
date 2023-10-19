<h1 align="center">Microsserviço de Login </h1>
<p align="center">🚀 Projeto pessoal desenvolvido em Angular e Spring Boot e orquestrado pelo Kubernetes na Azure</p>

<h4 align="center"> 
	 🐛 Finalizado!
</h4>

#
### 👉  Descrição do projeto

<p> Esse serviço foi desenvolvido em Angular/TS e SpringBoot (JDK 17), Spring Security 6, JWT e conta com uma estilização feita em Angular Material. Além disso, o processo de Deploy foi feito usando pipeline multistage (primeiro no namespace de dev e depois, se autorizado, no namespace de prod) na Azure.
 </p>
<p>A ideia é que o usuário autenticado receba um token de autorização que será armazenado no SessionStorage, persistindo a sessão até que ele feche o navegador ou até que o token tenha expirado.
</p>
<p> Também adicionei um sistema de redefinição de senha através do e-mail, de modo que o usuário possa alterar sua senha de acesso quando necessário.</p>

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
