
const textArea = document.querySelector(".text-area");
const mensage = document.querySelector(".mensage");

let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

function btnCriptografar(){
    const textoEncriptado = criptografar(textArea.value);
    mensage.value = textoEncriptado;
    textArea.value = "";
}

function criptografar(stringCriptografada){
    
    stringCriptografada = stringCriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringCriptografada.includes(matrizCodigo[i][0])){
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringCriptografada;
}

function btnDescriptografar(){
    const textoDesencriptado = descriptografar(textArea.value);
    mensage.value = textoDesencriptado;
    textArea.value = "";
}

function descriptografar(stringDescriptografada){
    
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDescriptografada.includes(matrizCodigo[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDescriptografada;
}

// function criptografar(string){
//     const resultado = string
//     .replaceAll("e", "enter")
//     .replaceAll("i", "imes")
//     .replaceAll("a", "ai")
//     .replaceAll("o", "ober")
//     .replaceAll("u", "ufat");

//     return resultado;    
// }

// function descriptografar(string){
//     const resultado = string
//     .replace(/enter/g, "e")
//     .replace(/imes/g, "i")
//     .replace(/ai/g, "a")
//     .replace(/ober/g, "o")
//     .replace(/ufat/g, "u");

//     return resultado;
// }

function btnCopiar(){
    mensage.select();
    document.execCommand('copy');
    mensage.value = "";
}


/*document. execCommand('copy');*/