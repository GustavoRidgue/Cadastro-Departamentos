var campoFiltro = document.querySelector('#campoFiltro');

campoFiltro.addEventListener('input', function(){
	console.log($(this).val());
	var departamentos = document.querySelectorAll(".linha-tabela");

	for (var i = 0; i < departamentos.length; i++) {
		var departamento = departamentos[i];
		var nomeDept = departamento.querySelector(".dept-nome");

		var nome = nomeDept.textContent;
		var expr = new RegExp($(this).val(), "i");

		if (!expr.test(nome)) {
			departamento.classList.add('esconder');
		} else {
			departamento.classList.remove('esconder');
		}
	}
})