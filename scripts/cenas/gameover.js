class GameOver {
  constructor(){
  }

  draw() {
    noLoop();
    somFundo.stop();
    somMorte.setVolume(0.5);
    somMorte.play();
    image(imgGameOver, width/2-206, height/2-78, 412, 78);
    
    this._btn();
  }
  
  _btn() {
    this.btn = createButton('Voltar');
    this.btn.addClass('botao-tela-inicial');
    this.btn.position(0, height/1.5);
    this.btn.center('horizontal');
    this.btn.mousePressed(() => window.location.reload());
  }
}
