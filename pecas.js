var listaDepecas = ["filtro de ar", "motor", "amortecedor"]
if (listaDepecas.length < 10) {
    console.log("É possível cadastrar mais peças")
}else {
    console.log("Lista completa, não é possível cadastrar mais itens nesta lista")
}

let peso = 50;
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100 g")
}else {
    console.log("A peça possui peso adequado")
}

let nomePeca = "disco de freio"
if (nomePeca.length >3) {
    console.log ("Nome da peça adequado para cadastro")
}else if(nomePeca.length == 0){
    console.log("O nome da peça não pode ser vazio")
}else {
    console.log("O nome da peça deve conter mais que 3 caracteres, digite um nome válido")
}
switch(nomePeca.length){
    case 0:
        console.log("O nome da peça não pode ser vazio")
        break;

        case 1:
            case 2:
                case 3:
                    console.log("O nome da peça deve conter mais que 3 caracteres, digite um nome válido")
                    break;

                    default:
                        console.log("O nome da peça está adequado")

}