function preload() {
  imgTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonte = loadFont('imagens/assets/fonteTelaInicial.otf');
  
  imgCenario01 = loadImage('imagens/cenario/primeiroPlano.png');
  imgCenario02 = loadImage('imagens/cenario/segundoPlano.png');
  imgCenario03 = loadImage('imagens/cenario/terceiroPlano.png');
  imgCenarioCeu = loadImage('imagens/cenario/ceu.png');
  
  pontuacao = new Pontuacao();
  
  imgGameOver = loadImage('imagens/assets/game-over.png');

  imgPersonagem = loadImage('imagens/personagem/correndo.png');

  imgInimigo = loadImage('imagens/inimigos/gotinha.png');
  imgInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
  imgInimigoGrande = loadImage('imagens/inimigos/troll.png');

  somFundo = loadSound('sons/trilha_jogo.mp3');
  somPulo = loadSound('sons/somPulo.mp3');
  somMorte = loadSound('sons/somMorte.mp3');
}
