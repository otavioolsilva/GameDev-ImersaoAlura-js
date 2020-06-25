class TelaInicial {
  constructor() {
  }
  
  draw() {
    this._imgFundo();
    this._texto();
    this._btn();
  }
  
  _imgFundo() {
    image(imgTelaInicial, 0, 0, width, height);
  }
  
  _texto() {
    textFont(fonte);
    textAlign(CENTER);
    textSize(height/8);
    text('as aventuras de', width/2, height/3.5);
    textSize(height/4);
    text('HipstA', width/2, height/2);
  }
  
  _btn() {
    btnGerenciador.draw();
  }
}