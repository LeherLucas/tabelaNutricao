// Busca os elementos a partir da classe e atribui novo valor
var tituloSec = document.querySelector(".titulo-secundario");
var titulo = document.querySelector(".titulo");
tituloSec.textContent = "Meus Pacientes";
titulo.textContent = "Lucas Nutrição";

// cria a variável paciente, busca o elemento a partir da classe e altera seu conteúdo
var pacientes = document.querySelectorAll(".paciente");

for(i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    //busca o elemento da altura e altera seu conteúdo
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o IMC e altera no elemento
    var IMC = calculaIMC(peso,altura);

    //valores booleanos
    var pesoValido = validarPeso(peso);//true or false
    var alturaValida = validarAltura(altura);
    var tdIMC = paciente.querySelector(".info-imc");

    if(pesoValido && alturaValida){
        tdIMC.textContent = IMC;
    }

    //alerta caso peso e altura sejam inválidos
    if(!pesoValido){
        console.log("Peso inválido!");
        var pesoValido = false;
        tdIMC.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(!alturaValida){
        console.log("Altura Inválida!");
        var alturaValida = false;
        tdIMC.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }    
}

//Validação quando o peso for válido
function validarPeso(peso){
    if(peso >= 0 && peso < 1000){
        return true;
    }else{
        return false;
    }
}

function validarAltura(altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaIMC(peso, altura){
    IMC = peso/(altura*altura);

    return IMC.toFixed(2);
}



