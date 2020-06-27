class Vida {
  constructor(maximo, inicial) {
    this.maximo = maximo;
    this.inicial = inicial;
    this.vidas = this.inicial;
    
    this.largura = 25;
    this.altura = 21;
    this.xInicial = 20;
    this.y = 20;
  }

  draw() {
    for(let i = 0; i < this.vidas; i++) {
      const margem = i * 10;
      const posX = this.xInicial * (1 + i);
      image(imgVida, posX + margem, this.y, this.largura, this.altura);
    }
  }

  ganhaVida() {
    if(this.vidas <= this.total) {
      this.vidas++;
    }
  }
  
  perdeVida() {
    this.vidas--;
    somDano.setVolume(0.5);
    somDano.play();
  }
}
