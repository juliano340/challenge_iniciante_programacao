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

function copy() {
    // Seleciona o elemento <p>
    var elementoParaCopiar = document.getElementById('result').firstChild;

    // Cria um elemento temporário para armazenar o texto
    var inputTemporario = document.createElement('input');
    inputTemporario.setAttribute('value', elementoParaCopiar.innerText);
    document.body.appendChild(inputTemporario);

    // Seleciona e copia o texto
    inputTemporario.select();
    document.execCommand('copy');

    // Remove o elemento input temporário
    document.body.removeChild(inputTemporario);

    console.log('Texto copiado para a área de transferência.');
}



