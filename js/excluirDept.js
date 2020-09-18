function excluir() {
	var desejaExcluir = confirm("Tem certeza que você deseja excluir este departamento?\nCaso sim clique em Ok\nCaso contrário, clique em Cancelar");

	if (desejaExcluir == true) {
	  var botaoExcluir = document.querySelectorAll(".btn-excluir");
	  for (var i = 0; i < botaoExcluir.length; i++) {
			var btn = botaoExcluir[i];
			btn.addEventListener('click', function(event){
				console.log(event);
				event.target.parentNode.parentNode.remove();
			});
		}
	} else {
		return;
	}
}

// function excluir() {
// 	var tbody = document.querySelector("#corpoTabela");
// 	var botaoExcluir = document.querySelectorAll(".btn-excluir");

// 	for (var i = 0; i < botaoExcluir.length; i++) {
// 		var btn = botaoExcluir[i];
// 		btn.addEventListener('click', function(event){
// 				console.log(event);
// 				event.target.parentNode.parentNode.remove();
// 		});
// 	}
// }


	// btnExcluir.forEach(function(botao){
		// tbody.addEventListener('click', function(event){
		// 	console.log(event);
		// 	event.target.parentNode.parentNode.remove();
		// });
	// });






// function excluir(){
// 	var tbody = document.querySelector("#corpoTabela");
// 	var btnExcluir = document.querySelectorAll(".btn-excluir");

// 	// btnExcluir.forEach(function(botao){
// 		tbody.addEventListener('click', function(event){
// 			console.log(event);
// 			event.target.parentNode.parentNode.remove();
// 		});
// 	// });
// }

// var botaoExcluir = document.querySelectorAll(".btn-excluir");
// for (var i = 0; i < botaoExcluir.length; i++) {
// 	var btn = botaoExcluir[i];
// 	btn.onclick = excluir();
// }



/*// btnExcluir.forEach(function(botao){
	// var btn = document.querySelector(".btn-excluir");
	tbody.addEventListener('click', function(btn){
		// var alvoEvento = event.target;
		// var paiAlvo = alvoEvento.parentNode;
		// paiAlvo.remove();
		console.log(event);
		// btn = document.querySelector(".btn-excluir");
		btn.target.parentNode.parentNode.remove();
	});
// });*/
