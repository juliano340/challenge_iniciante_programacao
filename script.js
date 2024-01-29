function cript() {
    let text = document.getElementById("mensagem").value;
    if (text == "") {
        alert("Por favor, digite um texto");
        return;
    }
    let cripto = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    let result = document.getElementById("result");
    result.innerHTML = "<p>" + cripto + "</p>" + "<button id='copy' onclick='copy()'>Copiar</button>";
    

}

function descript() {

    let cripto = document.getElementById("mensagem").value;
    if (cripto == "") {
        alert("Por favor, digite um texto");
        return;
    }
    

    // Inverter as substituições
    let textoOriginal = cripto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    let result = document.getElementById("result");
    result.innerHTML = "<p>" + textoOriginal + "</p>" + "<button id='copy' onclick='copy()'>Copiar</button>";
}


function copy() {
    
    var elementoParaCopiar = document.getElementById('result').firstChild;

    
    var inputTemporario = document.createElement('input');
    inputTemporario.setAttribute('value', elementoParaCopiar.innerText);
    document.body.appendChild(inputTemporario);

    
    inputTemporario.select();
    document.execCommand('copy');

    document.body.removeChild(inputTemporario);

    alert('Texto copiado para a área de transferência.');
}



