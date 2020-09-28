var departamentosLocal = JSON.parse(localStorage.getItem("obj_dept")) || {};

var botaoCria = $("#btnCriarDept");
var form = document.querySelector('#formularioCriarDept');

botaoCria.on("click", function(){
	var codigo = $("#inputCodigo");
	var nome = $("#inputNome");
	var estado = $("#inputEstado");
	var local = $("#inputLocal");
	var cidade = $("#inputCidade");

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

	var chamarValidacao = validarCriarForm();

	if (chamarValidacao) {
		var linhasIndex;
		var obj_dept = localStorage.getItem("obj_dept");
		obj_dept = JSON.parse(obj_dept);

		if (obj_dept == null) {
			obj_dept = [];
		}		

		var objDepartamento = {
			nome: nome.val(),
			codigo: codigo.val(),
			cidade: cidade.val(),
			local: local.val(),
			estado: estado.val(),
			diretoria: diretoria
		}

		obj_dept.push(objDepartamento);

		localStorage.setItem("obj_dept", JSON.stringify(obj_dept));

		function montarTd(dado, classe) {
			var td = document.createElement('td');
			td.append(dado);
			td.classList.add(classe);

			return td;
		}

		function montarTr(lugar, dado, classe) {
			var departamentoTr = document.createElement("tr");
			departamentoTr.classList.add("linha-tabela");

			if (lugar == "index") {
				departamentoTr.append(montarTd(dado, classe));

				return departamentoTr;
			}

			else if (lugar == "listar") {
				departamentoTr.append(montarTd(dado, classe));

				return departamentoTr;
			}
		}

		var qtdLinhas = 1;
		var linhas = document.querySelectorAll(".linha-tabela");
		for (var i = 0; i < linhas.length; i++) {
			qtdLinhas++;
			console.log('i: ' + i);
			console.log('linhas: ' + qtdLinhas);

		}

		function listarDepto(){
			let deptoNovo = JSON.parse(localStorage.getItem('obj_dept')) || [];
			let corpoTabela = $('#corpo-tabela');
			var corpoTabelaListar = $("#corpo-tabela-listar");
			var index = 0;

			for(var i in deptoNovo){
				console.log('loop ' + index)
				index++;
				var deptno = deptoNovo[i];

				console.log("Nome do departamento: " + deptno.nome)

				corpoTabela.append(montarTr("index", qtdLinhas , "dept-novo"));
				corpoTabela.append(montarTr("index", deptno.codigo , "dept-novo"));
				corpoTabela.append(montarTr("index", deptno.nome , "dept-novo"));
				corpoTabela.append(montarTr("index", "🗑" , "dept-novo"));

				corpoTabelaListar.append(montarTr("listar", qtdLinhas , "dept-novo"));
				corpoTabelaListar.append(montarTr("listar", deptno.codigo , "dept-novo"));
				corpoTabelaListar.append(montarTr("listar", deptno.nome , "dept-novo"));
				corpoTabelaListar.append(montarTr("listar", deptno.cidade , "dept-novo"));
				corpoTabelaListar.append(montarTr("listar", deptno.local , "dept-novo"));
				corpoTabelaListar.append(montarTr("listar", deptno.estado , "dept-novo"));
				corpoTabelaListar.append(montarTr("listar", deptno.diretoria , "dept-novo"));
				corpoTabelaListar.append(montarTr("listar", "🗑️" , "dept-novo"));
				// corpoTabela.innerHTML = '<tr>' + '<td>'+deptno.codigo+'</td>'+'<td>'+deptno.nome+'</td>'+'</tr>' ;
				// corpoTabelaListar.innerHTML = '<tr>' + '<td>'+deptno.codigo+'</td>'+'<td>'+deptno.nome+'</td>'+'<td>'+deptno.local+'</td>'+'<td>'+deptno.cidade+'</td>'+'<td>'+deptno.estado+'</td>'+'<td>'+deptno.diretoria+'</td><td><input type="button" class="botao" value="Editar"><input type="button" class="botao" value="Excluir"></td>' + '</tr>' ;
			}
		}

		listarDepto();

		console.log(objDepartamento.codigo)
		console.log(objDepartamento.nome)
		console.log(objDepartamento.cidade)
		console.log(objDepartamento.local)
		console.log(objDepartamento.estado)
		console.log(objDepartamento.diretoria)

		// function montarTd(tipoDado, dado, classe) {
		// 	if (tipoDado == "td") {
		// 		var td = document.createElement('td');
		// 		td.append(dado);
		// 		td.classList.add(classe);

		// 		return td;
		// 	}

		// 	else if (tipoDado == "link"){
		// 		var td = document.createElement('td');
		// 		var tdA = document.createElement('a');

		// 		tdA.append(dado);
		// 		td.append(tdA);
		// 		td.classList.add(classe);
		// 		tdA.classList.add("btn-excluir");

		// 		return td;
		// 	}

		// 	else if (tipoDado == "posicao") {
		// 		var td = document.createElement('td');
		// 		td.classList.add(classe);

		// 		return td;
		// 	}
		// }

		// function montarTr(lugar) {
		// 	var departamentoTr = document.createElement("tr");
		// 	departamentoTr.classList.add("linha-tabela");

		// 	var qtdLinhas = 1;
		// 	var linhas = document.querySelectorAll(".linha-tabela");
		// 	for (var i = 0; i < linhas.length; i++) {
		// 		qtdLinhas++;
		// 		console.log('i: ' + i);
		// 		console.log('linhas: ' + qtdLinhas);

		// 	}

		// 	if (lugar == "index") {
		// 		departamentoTr.appendChild(montarTd("td", qtdLinhas, "numero"));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.nome, "dept-nome"));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.codigo, "dept-codigo"));
		// 		departamentoTr.appendChild(montarTd("link", "🗑️", "dept-excluir"));

		// 		return departamentoTr;
		// 	}

		// 	else if (lugar == "listar") {
		// 		departamentoTr.appendChild(montarTd("td", qtdLinhas, "numero"));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.nome, "dept-nome"));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.codigo, "dept-codigo"));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.cidade, "dept-cidade"));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.local, "dept-local"));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.estado, 'dept-estado'));
		// 		departamentoTr.appendChild(montarTd("td", objDepartamento.diretoria, "dept-diretoria"));
		// 		departamentoTr.appendChild(montarTd("link", "🗑️", "dept-excluir"));

		// 		return departamentoTr;
		// 	}
		// }

		// function adicionaDepartamento(){
		// 	var linhaIndex = montarTr("index");
		// 	var linhaListar = montarTr("listar");

		// 	var corpoTabela = $("#corpo-tabela");
		// 	var corpoTabelaListar = $("#corpo-tabela-listar");

		// 	corpoTabela.append(linhaIndex);
		// 	corpoTabelaListar.append(linhaListar);
		// 	removerLinha();
		// }
		// var botaoDimissmodal = $("#btnCriarDept");
		// botaoDimissmodal.attr("data-dismiss", "modal");
		// adicionaDepartamento();
		// form.reset();

		// // atualizaPosicao();

		// function savarStorage(){
		// 	var linhasIndex;
		// 	var linhasListar = document.querySelectorAll("#corpo-tabela-listar.linha-tabela");

		// 	localStorage.setItem("obj_dept", JSON.stringify(objDepartamento));
	}

// savarStorage();
// savarStorage(objDepartamento);

// }
else if (!chamarValidacao) {
	return false;
}
});

// function listarDepto(){
// 	let deptoNovo = JSON.parse(localStorage.getItem('obj_dept'));
// 	let corpoTabela = $('tbody');
// 	for(var i in deptoNovo){
// 		var depto = deptoNovo[i];
// 		corpoTabela.innerHTML = '<td>'+depto.codigo+'</td>'+'<td>'+depto.nome+'</td>'+'<td>'+depto.local+'</td>'+'<td>'+depto.cidade+'</td>'+'<td>'+depto.estado+'</td>'+'<td>'+depto.diretoria+'</td><td><input type="button" class="botao" value="Editar"><input type="button" class="botao" value="Excluir"></td>';
// 	}
// }

// listarDepto();









