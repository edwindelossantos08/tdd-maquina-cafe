class Azucarero {
  constructor(cantidadAzucar) { this.cantidadAzucar = cantidadAzucar; }
  hasAzucar(cantidad) { return this.cantidadAzucar >= cantidad; }
  giveAzucar(cantidad) { this.cantidadAzucar -= cantidad; }
}
module.exports = Azucarero;
