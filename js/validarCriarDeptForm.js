
console.log(retornaDadosUsuario("nome"));

function validarCriarForm() {
	var botaoCria = $("#btnCriarDept");
	var form = document.querySelector('#formularioCriarDept');

	
	var codigo = $("#inputCodigo");
	var nome = $("#inputNome");
	var estado = $("#inputEstado");
	var local = $("#inputLocal");
	var cidade = $("#inputCidade")

	var checkboxes = document.querySelectorAll(".checkboxDiretoria");
	var diretoria = "";

	for(var i=0; i<checkboxes.length; i++) {
		if (checkboxes[0].checked) {
			diretoria = 'E.I.S';
		}
		else if (checkboxes[1].checked) {
			diretoria = 'Recuperação';
		}
		else if (checkboxes[2].checked) {
			diretoria = 'Negócios';
		}
	}

	var erroCodigo = $("#erro-codigo");
	var erroNome = $("#erro-nome");
	var erroCidade = $("#erro-cidade");
	var erroLocal = $("#erro-local");
	var erroEstado = $("#erro-estado");
	var erroDiretoria = $("#erro-diretoria");

	if (codigo.val() == "") {
		erroCodigo.text("Este campo precisa ser preenchido!") ;
		erroCodigo.addClass("form-erro");
		codigo.addClass("is-invalid");
		return false;
	} else {
		erroCodigo.text("");
		erroCodigo.removeClass("form-erro");
		codigo.removeClass("is-invalid")
	}

	if (nome.val() == "") {
		erroNome.text("Este campo precisa ser preenchido!");
		erroNome.addClass("form-erro");
		nome.addClass("is-invalid");
		return false;
	} else {
		erroNome.text("");
		erroNome.removeClass("form-erro");
		nome.removeClass("is-invalid")
	}

	if (cidade.val() == "" || cidade.val().length > 15) {
		erroCidade.text("Este campo precisa ser preenchido!");
		erroCidade.addClass("form-erro");
		cidade.addClass("is-invalid");
		return false;
	} else {
		erroCidade.text("");
		erroCidade.removeClass("form-erro");
		cidade.removeClass("is-invalid")
	}

	if (local.val() == "") {
		erroLocal.text("Este campo precisa ser preenchido!");
		erroLocal.addClass("form-erro");
		local.addClass("is-invalid");
		return false;
	} else {
		erroLocal.text("");
		erroLocal.removeClass("form-erro");
		local.removeClass("is-invalid")
	}

	if (estado.val() == "") {
		erroEstado.text("Campo obrigatório!");
		erroEstado.addClass("form-erro");
			// estado.addClass("is-invalid");
			return false;
		} else {
			erroEstado.text("");
			erroEstado.removeClass("form-erro");
			// estado.removeClass("is-invalid");
		}

		if (diretoria == "") {
			erroDiretoria.text("Campo obrigatório!");
			erroDiretoria.addClass("form-erro");
			// diretoria.addClass("is-invalid");
			return false;
		} else {
			erroDiretoria.text("");
			erroDiretoria.removeClass("form-erro");
			// diretoria.removeClass("is-invalid");
		}

		if (codigo.val().length != 0 || codigo.val().length < 10000 && nome.val().length != 0 || nome.val().length < 30 && estado.val().length != 0
			&& local.val().length != 0 && cidade.val().length != 0 && diretoria.length != 0) {
			return true;
	}
}


