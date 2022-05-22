var listaPalavras = [
    "CACHORRO",
    "CAVALO",
    "MACACO",
    "GALINHA",
    "PEIXE",
    "ORNITORRINCO",
    "ABACAXI",
    "BANANA",
    "GOIABA",
    "MELANCIA",
    "PERA"
];
var palavraSorteada;
var jaFoiUsada = [];


function iniciarJogo(lista){
    someBotoes();
    desenhaTabuleiro();
    sorteiaPalavra(lista);
    desenhaTracinhos(palavraSorteada);
}
function someBotoes(){
    var botoes = document.querySelectorAll('.botoes');
    botoes.forEach(element => {
        element.style.display = "none";
    });
}
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

    var letrasErradas = document.createElement("div");
    letrasErradas.setAttribute('id','letrasErradas')
    tabuleiro.appendChild(letrasErradas);
    
    var dica = document.createElement("div");
    dica.setAttribute('id','dica')
    tabuleiro.appendChild(dica);

}
function inteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function sorteiaPalavra(lista){
    var aleatorio = inteiroAleatorio(0, lista.length);
    palavraSorteada = lista[aleatorio];
}
function desenhaTracinhos(palavra){
    var minhaDiv = document.querySelector('#palavra')
    for (let i = 0; i < palavra.length; i++) {
        var novoTracinho = document.createElement("input");
        minhaDiv.appendChild(novoTracinho);
        novoTracinho.setAttribute('id',i);
        novoTracinho.setAttribute('disabled','disabled');
    }
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
}
function seLetra(tecla){
    //cria o alfabete de letras permitidas
    var alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    //converte a tecla digitada para maiúscula para comparar com o alfabeto
    tecla = tecla.toUpperCase();
    //verifica se a tecla digitada é uma letra do alfabeto permitido
    for(let i=0; i<alfabeto.length; i++){
        if(tecla == alfabeto[i]){
            return tecla;
        }
    }
    return false;
}
function seLetraUsada(letra){
    //verifica se a letra já foi usada
    for(let i=0;i<jaFoiUsada.length;i++){
        if(letra == jaFoiUsada[i]){
            return true;
        }
    }
    jaFoiUsada.push(letra);
    return false;
}
function seLetraPalavra(letra){
    //escreve a letra no(s) tracinho(s) correto(s)
    for(let i=0;i<palavraSorteada.length;i++){
        if(letra == palavraSorteada[i]){
            var apresenta = document.getElementById(i);
            apresenta.value = letra;
        }
    }
}
function novaTecla(tecla){
    var letra = seLetra(tecla);
    if(letra){
        if(!seLetraUsada(letra)){
           if(!seLetraPalavra(letra)){
               letrasErradas = document.querySelector("#letrasErradas");
               letrasErradas.textContent = letrasErradas.textContent+' '+letra;
           }
        }
    }
    
}