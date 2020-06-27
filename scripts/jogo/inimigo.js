class Inimigo extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdSprites, velocidade) {
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdSprites);
    
    this.velocidade = velocidade;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.velocidade;
  }
  
  aparece() {
   this.x = width;
  }
}