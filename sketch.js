let imgCenario;
let cenario;
let imgPersonagem;
let personagem;
let xPersonagem = 110;
let yPersonagem = 135;
let musicaFundo;

function preload() {
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  musicaFundo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 3);
  personagem = new Personagem(imgPersonagem);
  musicaFundo.loop();
  frameRate(40);
}

function draw() {
  cenario.exibe();
  cenario.move();
  
  personagem.exibe();
}
