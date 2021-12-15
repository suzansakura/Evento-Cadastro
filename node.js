// cadastro de eventos por data, idade e vagas
var data = new Date();
var dataDoEvento = 14/12/2021
if (dataDoEvento => new Date){
console.log("Inserir data de nascimento")
}else{
    console.log("Acesso não autorizado, data inválida")
}


let idade = 25

if (idade >= 18){
    console.log("Escolher um evento")
}else { 
    console.log("Cadastro não autorizado por idade")
}


let lista = ["participante1","participante2","participante3","participante4"];
let quantidadeDeInscritos = lista.length;
console.log(quantidadeDeInscritos);

if (lista.length < 100){
    
    console.log("Parabéns, inscrição realizada!")
}else{ 
    console.log("Número de vagas Esgotadas")
}

// a partir daqui surgiriam funções de escolha de palestras e afins

