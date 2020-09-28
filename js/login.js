var usuario = $("#inputUsuario");
var email = $("#inputEmail");
var senha = $("#inputSenha");
var btnLogin = $("#botao-login");

var erroUser = $("#erro-usuario");
var erroEmail = $("#erro-email");
var erroSenha = $("#erro-senha");

// console.log(usuario);
// console.log(email);
// console.log(senha);

function validarForm(){
	if (usuario.val() == "") {
		erroUser.text("Este campo não pode estar em branco!") ;
		erroUser.addClass("form-erro");
		usuario.addClass("is-invalid");
		usuario.removeClass("is-valid");
		console.log(usuario.val());
		return false;
	} else {
		erroUser.text("");
		erroUser.removeClass("form-erro");
		usuario.removeClass("is-invalid")
		usuario.addClass("is-valid")
	}

	if (email.val() != 'gustavo.barbosa@omni.com.br') {
		erroEmail.text("Este email não está válido!");
		erroEmail.addClass("form-erro");
		email.addClass("is-invalid");
		email.removeClass("is-valid");
		return false;
	} else {
		erroEmail.text("");
		erroEmail.removeClass("form-erro");
		email.removeClass("is-invalid")
		email.addClass("is-valid")
	}

	if (senha.val() != '123') {
		erroSenha.text("Esta senha não está válida!");
		erroSenha.addClass("form-erro");
		senha.addClass("is-invalid");
		senha.removeClass("is-valid");
		return false;
	} else {
		erroSenha.text("");
		erroSenha.removeClass("form-erro");
		senha.removeClass("is-invalid")
		senha.addClass("is-valid")
	}

	if (usuario.val().length > 0 && email.val() == "gustavo.barbosa@omni.com.br" && senha.val() == '123') {
		console.log(usuario.val());
		console.log(retornaDadosUsuario("nome"));
		btnLogin.attr("href", "departamentos.html");
		return true;
	}
}


function retornaDadosUsuario(informacao){
	if (validarForm) {
		var objUsuario = {
			nome: usuario.val(),
			email: email.val(),
			senha: senha.val()
		}

		if (informacao == "nome") {
			return objUsuario.nome;
		}

		else if (informacao == "email") {
			return objUsuario.email;
		}

		else if (informacao == "senha") {
			return objUsuario.senha;
		}
		

	} else {
		return false;
	}
	
}

retornaDadosUsuario("nome");