// Busca os elementos a partir da classe e atribui novo valor
var tSecundario = document.querySelector(".titulo-secundario");
var titulo = document.querySelector(".titulo");
tSecundario.textContent = "Meus Pacientes";
titulo.textContent = "Ucas Nutrição";

// cria a variável paciente, busca o elemento a partir da classe e altera seu conteúdo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //busca o elemento da altura e altera seu conteúdo
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o IMC e altera no elemento
    var IMC = peso / (altura * altura);

    //valores booleanos
    var pesoValido = true;
    var alturaValida = true;

    if(pesoValido && alturaValida){
        var tdIMC = paciente.querySelector(".info-imc");
        tdIMC.textContent = IMC.toFixed(2);
    }

    //alerta caso peso e altura sejam inválidos
    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido!");
        var pesoValido = false;
        tdIMC.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura Inválida!");
        var alturaValida = false;
        tdIMC.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }

    
}

/*titulo.addEventListener('click', function(){
    alert("Clicou nessa bomba");
});*/

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener('click',
    function(event){
        event.preventDefault();
        console.log("Fui clicado");
    }
);





