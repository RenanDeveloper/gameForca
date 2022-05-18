function desenhaTabuleiro(){
    var tabuleiro = document.createElement("div");
    tabuleiro.setAttribute('id','tabuleiro')
    container.appendChild(tabuleiro);

    var forca = document.createElement("div");
    forca.setAttribute('id','forca')
    tabuleiro.appendChild(forca);

    var canvas = document.createElement("canvas");
    canvas.setAttribute('id','canvas')
    forca.appendChild(canvas);
    canvas.setAttribute('width', '600px');
    canvas.setAttribute('height', '400px');


    var palavra = document.createElement("div");
    palavra.setAttribute('id','palavra')
    tabuleiro.appendChild(palavra);
    
    var dica = document.createElement("div");
    dica.setAttribute('id','dica')
    tabuleiro.appendChild(dica);

}

function someBotoes(){
    var botoes = document.querySelectorAll('.botoes');
    botoes.forEach(element => {
        element.style.display = "none";
    });
}

function inteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function sorteiaPalavra(lista){
    var aleatorio = inteiroAleatorio(0, lista.length);
    var palavraSorteada = lista[aleatorio];
    return palavraSorteada;
}

function desenhaTracinhos(palavra){
    var minhaDiv = document.querySelector('#palavra')
    for (let i = 0; i < palavra.length; i++) {
        var novoTracinho = document.createElement("input");
        minhaDiv.appendChild(novoTracinho);
    }
}

function iniciarJogo(lista){
    desenhaTabuleiro();
    someBotoes();
    var palavraSorteada = sorteiaPalavra(lista);
    desenhaTracinhos(palavraSorteada);
}

function desenhaBoneco(){
    var tela = document.querySelector('canvas');
    console.log(tela)
    var pincel = tela.getContext("2d");

    
}