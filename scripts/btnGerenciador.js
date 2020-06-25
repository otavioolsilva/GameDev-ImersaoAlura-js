class BtnGerenciador {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.btn = createButton(this.texto);
    this.btn.addClass('botao-tela-inicial');
    this.btn.mousePressed(() => this._alteraCena());
  }

  draw() {
    this.btn.position(this.x, this.y);
    this.btn.center('horizontal');
  }

  _alteraCena() {
    this.btn.remove();
    cenaAtual = 'jogo';
  }
}
