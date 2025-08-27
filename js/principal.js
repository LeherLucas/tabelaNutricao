var pacientes = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "Lucas Nutrição";
pacientes.textContent = "Meus Pacientes";

var paciente = document.querySelector("#primeiro-paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");

if(peso < 0 || peso > 1000){
    alert("Peso inválido!");
}
if(altura < 0 || altura > 3.00){
    alert("Altura inválida");
}


tdImc.textContent = imc;