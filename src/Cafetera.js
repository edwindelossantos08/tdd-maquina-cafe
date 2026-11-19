class Cafetera {
  constructor(cantidadCafe) { this.cantidadCafe = cantidadCafe; }
  hasCafe(cantidad) { return this.cantidadCafe >= cantidad; }
  giveCafe(cantidad) { this.cantidadCafe -= cantidad; }
}
module.exports = Cafetera;
