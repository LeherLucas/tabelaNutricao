//Acessa a tag <button> a partir da id
var botaoAdicionar = document.querySelector("#adicionar-paciente");

//Evento click e função com instruções para adicionar novos pacientes
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    //Acessa a tag <form> para acessar a <input>
    var form = document.querySelector("#form-adiciona");
    
    //Acessa o valor do atributo name da tag <input>
    var paciente = dadosPacientesFormulario(form);
    
    //Acessa a tag <tr> para acessar a <td>
    var pacienteTr = criaTr(paciente);

    var erros = validarPaciente(paciente);
    //Se for um paciente inválido
    if(erros.length > 0){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    /*Selecionando o elemento <tbody> e adicionando
    a nova tag <tr> a tabela*/
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

});

function dadosPacientesFormulario(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        IMC: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
    
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //Adiciona o conteúdo das <td> dentro do <tr>
    pacienteTr.appendChild(criaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criaTd(paciente.IMC, "info-imc"));

    return pacienteTr;
}

function criaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validarPaciente(paciente){

    var erros = [];

    if(!validarPeso(paciente.peso)) erros.push("Peso inválido!");
    
    if(!validarAltura(paciente.altura)) erros.push("Altura inválida");

    return erros;
}