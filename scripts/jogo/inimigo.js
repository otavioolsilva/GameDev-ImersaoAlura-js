class Inimigo extends Animacao {
  constructor(imagem, x, largura, altura, larguraSprite, alturaSprite, qtdSprites) {
    super(imagem, x, largura, altura, larguraSprite, alturaSprite, qtdSprites);
    
    this.velocidade = 7;
  }
  
  move() {
    this.x = this.x - this.velocidade
    
    if(this.x < -this.largura) this.x = width;
  }
}