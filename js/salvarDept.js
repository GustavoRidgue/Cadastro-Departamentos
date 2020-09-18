var btnSalvar  = document.querySelector('#btnSalvar');

btnSalvar.addEventListener('click', function(event){
  event.preventDefault();

  var form = document.querySelector('#formulario');

  var codigo = form.iCod.value;
  var nome = form.iNome.value;
  var estado = form.iEstado.value;
  var local = form.iLocal.value;
  var cidade = form.iCidade.value;

  var checkboxes = document.querySelectorAll('.radioDiretoria');

  for(var i=0; i<checkboxes.length; i++) {
    if (checkboxes[0].checked) {
      var valorRadio = 'E.I.S';
    }
    else if (checkboxes[1].checked) {
      var valorRadio = 'Recuperação';
    }
    else if (checkboxes[2].checked) {
      var valorRadio = 'Negócios ';
    }
  }
  
  //especifica onde vc quer criar um novo element
  var novoTr = document.createElement("tr");

  var codigoTd = document.createElement("td");
  var nomeTd = document.createElement("td");
  var estadoTd = document.createElement("td");
  var localTd = document.createElement("td");
  var cidadeTd = document.createElement("td");
  var diretoriaTd = document.createElement("td");

  var alteracoesTd = document.createElement("td");
  var detalhesBtn = document.createElement("button");
  var editarBtn = document.createElement("button");
  var excluirBtn = document.createElement("button");

  codigoTd.textContent = codigo;
  nomeTd.textContent = nome;
  estadoTd.textContent = estado;
  localTd.textContent = local;
  cidadeTd.textContent = cidade;
  diretoriaTd.textContent = valorRadio;

  detalhesBtn.textContent = "Detalhes";
  editarBtn.textContent = "Editar";
  excluirBtn.textContent = "Excluir";

  detalhesBtn.classList.add('btn-detalhes');
  editarBtn.classList.add('btn-editar');
  excluirBtn.classList.add('btn-excluir');
  excluirBtn.setAttribute('onclick', 'return excluir()');

  alteracoesTd.appendChild(detalhesBtn);
  alteracoesTd.appendChild(editarBtn);
  alteracoesTd.appendChild(excluirBtn);

  //appendChil coloca algo como filho de algo
  novoTr.appendChild(codigoTd);
  novoTr.appendChild(nomeTd);
  novoTr.appendChild(alteracoesTd);
  // novoTr.appendChild(estadoTd);
  // novoTr.appendChild(localTd);
  // novoTr.appendChild(cidadeTd);
  // novoTr.append(valorRadio);

  var corpoTabela = document.querySelector('#corpoTabela');
  corpoTabela.appendChild(novoTr);
})

// linha.parentNode.parentNode.removeChild(linha.parentNode);


/*
var tabelaElement = document.querySelector('#corpoTabela tr');
var inputCod      = document.querySelector('#inputCod');
var inputNome     = document.querySelector('#inputNome');
var inputEstado   = document.querySelector('#inputEstado');
var inputLocal    = document.querySelector('#inputLocal');
var inputCidade   = document.querySelector('#inputCidade');
*/

/*
var informacoes = [
  {codigo: 1, nome: 'departamento 1'},
  {codigo: 2, nome: 'departamento 2'}
]

function renderInformacoes() {
  //Excluit conteúdo da lista antes de renderiza-la
  tabelaElement.innerHTML = '';

  //atribui valores de todos para var todo
  for(informacao of informacoes) {            //parei aqui
    //vai ser o li
    var todoElement = document.createElement('li');
    //vai ficar dentro da li ultilizando o todo pois contém os textos
    var todoText = document.createTextNode(todo);

    //criacao do link de excluir
    var linkElement = document.createElement('a');
    //cria o href do link
    linkElement.setAttribute('href', '#');

    //retornar a posicao do array
    //procura no array de todos o index
    var posicao = todos.indexOf(todo);
    //chama a function que deleta
    linkElement.setAttribute('onclick', 'deleteTodo(' + posicao + ')');

    // coloca texto dentro do link
    var linkText = document.createTextNode('Excluir');
  
    //add o texto do linkText no link
    linkElement.appendChild(linkText);

    //add todoText dentro do todoElement
    todoElement.appendChild(todoText);
    //add o link element no final
    todoElement.appendChild(linkElement);
  
    //pega a ul e add os todoElement
    listElement.appendChild(todoElement);
  }
}
*/