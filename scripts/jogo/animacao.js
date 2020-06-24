class Animacao {
  constructor(imagem, x, largura, altura, larguraSprite, alturaSprite, qtdSprites){
    this.imagem = imagem;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.y = height - this.altura;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    this.qtdSprites = qtdSprites;
    
    this.frameAtual = 0;
  }
  
  exibe(){    
    let xImg = this.frameAtual % 4 * this.larguraSprite;
    let yImg = Math.floor(this.frameAtual / 4) * this.alturaSprite;

    image(this.imagem, this.x, this.y, this.largura, this.altura, xImg, yImg, this.larguraSprite, this.alturaSprite);

    this.anima();
  }
  
  anima(){
    this.frameAtual++;
    if(this.frameAtual == this.qtdSprites - 1) this.frameAtual = 0;
  }
}