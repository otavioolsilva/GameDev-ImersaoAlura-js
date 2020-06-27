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
    
    this.invencivel = false;
  }

  pula() {
    if(this.contPulo != 2) {
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

  tornarInvencivel() {
    this.invencivel = true;
    
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  colisao(inimigo, largura, altura) {
    if(this.invencivel) {
      return false;
    }
      
    const estado = collideCircleCircle(this.x+55, this.y+70, this.altura/1.6, inimigo.x + (inimigo.largura/1.7), inimigo.y + (inimigo.altura/1.7), inimigo.altura/1.2);
    
    return estado;
  }
}
