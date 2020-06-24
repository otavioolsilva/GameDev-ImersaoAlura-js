class Personagem extends Animacao {
  constructor(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdSprites){
    super(imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, qtdSprites);

    this.variacaoY = variacaoY;
    this.yBase = height - this.altura - this.variacaoY;
    this.y = this.yBase;

    this.velocidadeDoPulo = 0;
    this.alturaDoPulo = 25;
    this.gravidade = 2;
    this.contPulo = 0;
  }

  pula() {
    if(this.auxPulo != 2) {
      this.velocidadeDoPulo = -this.alturaDoPulo;
      this.contPulo++;
      somPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yBase) {
      this.y = this.yBase;
      this.contPulo = 0;
    }
  }

  colisao(inimigo, largura, altura) {
    const precisao = 0.64;
    const estado = collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);

    /* tentativa de aumentar precisao
    noFill();
    circle(this.x+55, this.y+70, this.altura/1.8);
    circle(inimigo.x + (this.largura/3), inimigo.y + (this.altura/4), inimigo.altura);
    const estado = collideCircleCircle(this.x+55, this.y*1.2, this.altura/1.8, inimigo.x, inimigo.y, inimigo.altura);*/
    
    return estado;
  }
}
