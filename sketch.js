function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somFundo.loop();
  
  btnGerenciador = new BtnGerenciador('Iniciar', 0, height/1.5);
  
  telaInicial = new TelaInicial();
  jogo = new Jogo();
  gameover = new GameOver();
  jogo.setup();
  
  cenas = {
    telaInicial,
    jogo,
    gameover
  };
}

function keyPressed() {
  if(cenaAtual === 'jogo') jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
