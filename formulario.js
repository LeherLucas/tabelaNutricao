var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',
    function(event){
        event.preventDefault();

        //Seleciona a tag <form> a partir do id
        var formulario = document.querySelector('#form-adiciona');
        
        //Variáveis para acessar o valor do <input> a partir do name
        var nome = formulario.nome.value;
        var peso = formulario.peso.value;
        var altura = formulario.altura.value;
        var gordura = formulario.gordura.value; 

        //Cria o elemento <tr>
        var pacienteTr = document.createElement("tr");

        //Cria as tags <td>
        var nomeTd = document.createElement("td");
        var pesoTd = document.createElement("td");
        var alturaTd = document.createElement("td");
        var gorduraTd = document.createElement("td");
        var imcTd = document.createElement("td");

        //adiciona os valores digitados a <td> criada
        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;

        pacienteTr.appendChild(nomeTd);
        pacienteTr.appendChild(pesoTd);
        pacienteTr.appendChild(alturaTd);
        pacienteTr.appendChild(gorduraTd);
        
        var tabela = document.querySelector("#tabela-pacientes");
        tabela.appendChild(pacienteTr);
    }
);