class Pontuacao {
  constructor(){
    this.pontos = 0;
  }
  
  exibe() {
    textFont(fonte);
    textAlign(RIGHT);
    fill('#fff');
    textSize(30);
    text(parseInt(this.pontos), width - 30, 35);
  }
  
  computar() {
    this.pontos += 0.05;
  }
}