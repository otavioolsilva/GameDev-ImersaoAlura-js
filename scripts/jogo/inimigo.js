class Inimigo extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdSprites, velocidade, delay) {
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdSprites);
    
    this.velocidade = velocidade;
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  move() {
    this.x = this.x - this.velocidade
    
    if(this.x < -this.largura - this.delay) this.x = width;
  }
}