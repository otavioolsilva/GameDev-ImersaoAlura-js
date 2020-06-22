class Personagem {
  constructor(imagem){
    this.imagem = imagem;
    this.frameAtual = 0;
  }
  
  exibe(){
    let x = this.frameAtual % 4 * 220;
    let y = Math.floor(this.frameAtual / 4) * 270;
    
    image(this.imagem, 0, height-yPersonagem, xPersonagem, yPersonagem, x, y, 220, 270);
    this.anima();
  }

  anima(){
    this.frameAtual++;
    if(this.frameAtual == 15) this.frameAtual = 0;
  }
}
