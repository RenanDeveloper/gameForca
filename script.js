var listaPalavras = [
    {
        nome: "CACHORRO",
        dica: "ANIMAL"
    },
    {
        nome: "PERA",
        dica: "FRUTA"
    },
    {
        nome: "LAPIS",
        dica: "OBJETO"
    },
];
var palavraSorteada;
var jaFoiUsada = [];
var chances = 0;
var ganhou = 0;
var habilitarTeclas = false;


function iniciarJogo(lista){
    habilitarTeclas = true;
    someBotoes();
    desenhaTabuleiro();
    sorteiaPalavra(lista);
    desenhaTracinhos(palavraSorteada);
    desenhaForca();
    var controles = document.querySelector('.controles');
    controles.style.display = "none";
}
function someBotoes(){
    var botoes = document.querySelectorAll('.botoes');
    botoes.forEach(element => {
        element.style.display = "none";
    });
}
function desenhaTabuleiro(){
    var tabuleiro = document.createElement("div");
    tabuleiro.setAttribute('id','tabuleiro');
    container.appendChild(tabuleiro);

    var forca = document.createElement("div");
    forca.setAttribute('id','forca');
    tabuleiro.appendChild(forca);

    var canvas = document.createElement("canvas");
    canvas.setAttribute('id','canvas');
    forca.appendChild(canvas);
    canvas.setAttribute('width', '600px');
    canvas.setAttribute('height', '360px');

    var palavra = document.createElement("div");
    palavra.setAttribute('id','palavra');
    tabuleiro.appendChild(palavra);

    var letrasErradas = document.createElement("div");
    letrasErradas.setAttribute('id','letrasErradas');
    tabuleiro.appendChild(letrasErradas);
    letrasErradas.textContent = "Letras Usadas: "
    
    var dica = document.createElement("div");
    dica.setAttribute('id','dica');
    tabuleiro.appendChild(dica);
    var dicaPalavra = document.createElement("p");
    dicaPalavra.setAttribute('id','dicaPalavra');
    dica.appendChild(dicaPalavra);
    
}
function inteiroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function sorteiaPalavra(lista){
    var aleatorio = inteiroAleatorio(0, lista.length);
    palavraSorteada = lista[aleatorio].nome;
    
    var dica = document.querySelector('#dicaPalavra');
    dica.textContent = "Dica: "+listaPalavras[aleatorio].dica;
}
function desenhaTracinhos(palavra){
    var minhaDiv = document.querySelector('#palavra')
    for (let i = 0; i < palavra.length; i++) {
        var novoTracinho = document.createElement("input");
        minhaDiv.appendChild(novoTracinho);
        novoTracinho.setAttribute('id',i);
        novoTracinho.setAttribute('class','letrinha');
        novoTracinho.setAttribute('disabled','disabled');
    }
}
function desenhaForca(){
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
}
function desenhaBoneco(){
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext("2d");

    if(chances == 1){
        // desenha cabeça do boneco
        pincel.beginPath();
        pincel.arc(300, 100, 50, 0, 2*3.14);
        pincel.stroke();
    }else if(chances == 2){
        //desenha tronco do boneco
        pincel.beginPath();
        pincel.moveTo(300,150);
        pincel.lineTo(300,250);
        pincel.stroke();
    }else if(chances == 3){
        //desenha braço a direita
        pincel.beginPath();
        pincel.moveTo(300,180);
        pincel.lineTo(350,220);
        pincel.stroke();
    }else if(chances == 4){
        //desenha braço a esquerda
        pincel.beginPath();
        pincel.moveTo(300,180);
        pincel.lineTo(250,220);
        pincel.stroke();
    }else if(chances == 5){
        //desenha perna a direita
        pincel.beginPath();
        pincel.moveTo(300,250);
        pincel.lineTo(350,290);
        pincel.stroke();
    }else if(chances == 6){
        //desenha perna a esquerda
        pincel.beginPath();
        pincel.moveTo(300,250);
        pincel.lineTo(250,290);
        pincel.stroke();
        //desenha olhos em X
        pincel.beginPath();
        pincel.moveTo(275,85);
        pincel.lineTo(285,95);
        pincel.stroke();
         
        pincel.moveTo(285,85);
        pincel.lineTo(275,95);
        pincel.stroke();

        pincel.beginPath();
        pincel.moveTo(315,85);
        pincel.lineTo(325,95);
        pincel.stroke();
         
        pincel.moveTo(325,85);
        pincel.lineTo(315,95);
        pincel.stroke();

    }
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
    //se não foi usada, inclui como usada a partir de agora
    jaFoiUsada.push(letra);
    return false;
}
function seLetraPalavra(letra){
    var pertence = false;
    //se letra pertence à palavra, escreve a letra no(s) tracinho(s) correto(s)
    for(let i=0;i<palavraSorteada.length;i++){
        if(letra == palavraSorteada[i]){
            var apresenta = document.getElementById(i);
            apresenta.value = letra;
            ganhou++;
            if(!pertence){
                pertence = true;
            }
        }
    }
    //se a letra não pertence à palavra, desenha um membro do boneco
    if(!pertence){
        chances ++;
        desenhaBoneco(chances);
    }
}
function novaTecla(tecla){
    if(habilitarTeclas){
        if(chances >= 6 || ganhou >= palavraSorteada.length){
            return;
        }
        var letra = seLetra(tecla);
        if(letra){
            if(!seLetraUsada(letra)){
            if(!seLetraPalavra(letra)){
                letrasErradas = document.querySelector("#letrasErradas");
                letrasErradas.textContent = letrasErradas.textContent+' '+letra;
            }
            }
            if(chances >= 6){
                var derrota = document.createElement('div');
                var tabuleiro = document.querySelector('#tabuleiro');

                derrota.setAttribute('id', 'derrota');
                tabuleiro.appendChild(derrota);

                derrota.textContent = "Não foi dessa vez! Na próxima se sairá melhor.";
            }else if(ganhou >= palavraSorteada.length){
                var vitoria = document.createElement('div');
                var tabuleiro = document.querySelector('#tabuleiro');

                vitoria.setAttribute('id', 'vitoria');
                tabuleiro.appendChild(vitoria);

                vitoria.innerHTML = "Parabéns, você foi incrível!<br>A Palavra era: "+palavraSorteada;
            }
        }
    }
}
function tocarAudio(){
    if(typeof meuAudio !== 'undefined'){
        meuAudio.pause();
    }
    meuAudio = new Audio('sounds/derrota01.mp3');

    meuAudio.setAttribute('autoplay','autoplay');
}
function adicionaPalavra(){
    var controles = document.querySelector('.controles');
    var novaEntrada = document.createElement("div");
    var novaPalavra = document.createElement("input");
    var novaDica = document.createElement("input");
    var salvar = document.createElement("button");

    novaEntrada.setAttribute('id','novaEntrada');
    novaPalavra.setAttribute('id','novaPalavra');
    novaDica.setAttribute('id','novaDica');
    novaPalavra.setAttribute('placeholder','Insira a nova palavra');
    novaDica.setAttribute('placeholder','Dica para a palavra');
    salvar.setAttribute('id','salvar')

    controles.appendChild(novaEntrada);
    novaEntrada.appendChild(novaPalavra);
    novaEntrada.appendChild(novaDica);
    novaEntrada.appendChild(salvar);

    
    salvar.textContent = "Salvar";
    salvar.setAttribute('onClick','inserir(novaPalavra.value, novaDica.value)');

    var botoes = document.querySelectorAll('.botoes');
    botoes.forEach(element => {
        element.style.display = "none";
    });
}
function inserir(novaPalavra, novaDica){
    var palavra = novaPalavra.toUpperCase();
    var dica = novaDica.toUpperCase();
    var obj = new Object;
    
    obj = {
        nome: palavra,
        dica: dica
    }

    listaPalavras.push(obj);
    
    var botoes = document.querySelectorAll('.botoes');
    botoes.forEach(element => {
        element.style.display = "block";
    });

    var novaEntrada = document.querySelector('#novaEntrada');
    novaEntrada.remove();

}

function reiniciar(){

}