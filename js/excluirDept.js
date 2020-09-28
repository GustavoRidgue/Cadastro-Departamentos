function removerLinha(){
	var excluir = $(".btn-excluir");
	excluir.on("dblclick", function(){
		var simNao = confirm("Tem certeza que você deseja excluir este departamento permanentemente?"); // + nome + "?");

		if (simNao) {
			$(this).parent().parent().remove();
			atualizaPosicao();
		} else {
			return false;
		}
		savarStorage();
	});
}