class Vaso {
  constructor(cantidadVasos, contenido) {
    this.cantidadVasos = cantidadVasos;
    this.contenido = contenido;
  }
  hasVasos(cantidad) { return this.cantidadVasos >= cantidad; }
  giveVasos(cantidad) { this.cantidadVasos -= cantidad; }
}
module.exports = Vaso;
