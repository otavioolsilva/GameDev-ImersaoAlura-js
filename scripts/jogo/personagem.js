class Personagem extends Animacao {
  constructor(imagem, x, largura, altura, larguraSprite, alturaSprite, qtdSprites){
    super(imagem, x, largura, altura, larguraSprite, alturaSprite, qtdSprites);

    this.yBase = height - this.altura;
    this.y = this.yBase;

    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = 25;
    this.gravidade = 2;
    this.auxPulo = 0;
  }

  pula() {
    if(this.auxPulo != 2) {
      this.velocidadeDoPulo = -this.alturaDoPulo;
      this.auxPulo++;
      somPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yBase) this.y = this.yBase;
    
    if(this.y == this.yBase) this.auxPulo = 0;
  }

  colisao(inimigo) {
    const precisao = 0.64;
    const estado = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

    return estado;
  }
}