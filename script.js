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
    var pincel = tela.getContext("2d");

    //forca
    pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo(135,350);
    pincel.lineTo(450,350);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(180,350);
    pincel.lineTo(180,5);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(180,5);
    pincel.lineTo(300,5);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(300,50);
    pincel.lineTo(300,5);
    pincel.stroke();
    //cabeça do boneco
    pincel.beginPath();
    pincel.arc(300, 100, 50, 0, 2*3.14);
    pincel.stroke();
    //corpo do boneco
    pincel.beginPath();
    pincel.moveTo(300,150);
    pincel.lineTo(300,250);
    pincel.stroke();
    //braço a direita
    pincel.beginPath();
    pincel.moveTo(300,180);
    pincel.lineTo(350,220);
    pincel.stroke();
    //braço a esquerda
    pincel.beginPath();
    pincel.moveTo(300,180);
    pincel.lineTo(250,220);
    pincel.stroke();
    //perna a direita
    pincel.beginPath();
    pincel.moveTo(300,250);
    pincel.lineTo(350,290);
    pincel.stroke();
    //perna a esquerda
    pincel.beginPath();
    pincel.moveTo(300,250);
    pincel.lineTo(250,290);
    pincel.stroke();

    /* pincel.fillStyle = 'black';
    pincel.beginPath();
    pincel.moveTo(50,50);
    pincel.lineTo(50,400);
    pincel.lineTo(400,400);
    pincel.fill();
    pincel.fillStyle = 'white';
    pincel.beginPath();
    pincel.moveTo(100,175);
    pincel.lineTo(100,350);
    pincel.lineTo(275,350);
    pincel.fill(); */
}