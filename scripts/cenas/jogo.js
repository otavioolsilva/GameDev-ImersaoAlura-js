class Jogo {
  constructor() {
    this.indice = 0;
    
    this.mapa = cartucho.mapa;
  }
  
  setup() {
    cenario01 = new Cenario(imgCenario01, 3);
    cenario02 = new Cenario(imgCenario02, 2);
    cenario03 = new Cenario(imgCenario03, 1);
  
    personagem = new Personagem(imgPersonagem, 0, 25, 110, 135, 220, 270, 16);
    
    vida = new Vida(cartucho.configuracoes.vidaMaxima, cartucho.configuracoes.vidaInicial);
  
    const inimigo = new Inimigo(imgInimigo, width - 52, 25, 52, 52, 104, 104, 28, 10);
    const inimigoVoador = new Inimigo(imgInimigoVoador, width - 52, 180, 52, 52, 200, 150, 16, 10);
    const inimigoGrande = new Inimigo(imgInimigoGrande, width, 10, 200, 200, 400, 400, 28, 10);
  
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);
  }
  
  keyPressed(key) {
    if(key === ' ') personagem.pula();
  }
  
  draw() {
    image(imgCenarioCeu, 0, 0, width, height);
    cenario03.exibe();
    cenario03.move();
    cenario02.exibe();
    cenario02.move();
    cenario01.exibe();
    cenario01.move();

    pontuacao.exibe();
    pontuacao.computar();
  
    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;

    inimigo.exibe();
    inimigo.move();

    if(inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if(this.indice > this.mapa.length -1) this.indice = 0;
    }

    //Game over
    if(personagem.colisao(inimigo, inimigo.largura, inimigo.altura)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      if(vida.vidas === 0) cenaAtual = 'gameover';
    }
    
    vida.draw();
  }
}
