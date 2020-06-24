let imgCenario01;
let cenario01;
let imgCenario02;
let cenario02;
let imgCenario03;
let cenario03;
let imgCenarioCeu;

let imgPersonagem;
let personagem;
let xPersonagem = 110;
let yPersonagem = 135;

let imgInimigo;
let inimigo;

let imgGameOver;

let somFundo;
let somPulo;
let somMorte;

function preload() {
  imgCenario01 = loadImage('imagens/cenario/primeiroPlano.png');
  imgCenario02 = loadImage('imagens/cenario/segundoPlano.png');
  imgCenario03 = loadImage('imagens/cenario/terceiroPlano.png');
  imgCenarioCeu = loadImage('imagens/cenario/ceu.png');

  imgGameOver = loadImage('imagens/assets/game-over.png');

  imgPersonagem = loadImage('imagens/personagem/correndo.png');

  imgInimigo = loadImage('imagens/inimigos/gotinha.png');

  somFundo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  somMorte = loadSound('sons/somMorte.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario01 = new Cenario(imgCenario01, 3);
  cenario02 = new Cenario(imgCenario02, 2);
  cenario03 = new Cenario(imgCenario03, 1);
  personagem = new Personagem(imgPersonagem, 0, 110, 135, 220, 270, 16);
  inimigo = new Inimigo(imgInimigo, width - 52, 52, 52, 104, 104, 28); 
  somFundo.loop();
  frameRate(40);
}

function keyPressed() {
  if(key === ' ') {
    personagem.pula();
  }
}

function draw() {
  image(imgCenarioCeu, 0, 0, width, height);
  cenario03.exibe();
  cenario03.move();
  cenario02.exibe();
  cenario02.move();
  cenario01.exibe();
  cenario01.move();
  
  personagem.exibe();
  personagem.aplicaGravidade();
  
  inimigo.exibe();
  inimigo.move();
  
  //Game over
  if(personagem.colisao(inimigo)) {
    noLoop();
    somFundo.stop();
    somMorte.play();
    image(imgGameOver, width/2-206, height/2-39, height*0.88, height/6);
  }
}
