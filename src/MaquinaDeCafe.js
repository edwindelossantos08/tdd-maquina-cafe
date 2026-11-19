const Vaso = require('./Vaso');
const Cafetera = require('./Cafetera');
const Azucarero = require('./Azucarero');

class MaquinaDeCafe {
  constructor() {
    this.cafe = new Cafetera(50);
    this.vasosPequenos = new Vaso(5, 10);
    this.vasosMedianos = new Vaso(5, 20);
    this.vasosGrandes = new Vaso(5, 30);
    this.azucar = new Azucarero(20);
  }

  getTipoVaso(tipo) {
    const tipos = {
      pequeno: this.vasosPequenos,
      mediano: this.vasosMedianos,
      grande: this.vasosGrandes,
    };
    return tipos[tipo] ?? null;
  }

  getVasoDeCafe(vaso, cantidadVasos, cantidadAzucar) {
    if (!vaso.hasVasos(cantidadVasos)) return 'No hay Vasos';
    if (!this.cafe.hasCafe(vaso.contenido * cantidadVasos)) return 'No hay Cafe';
    if (!this.azucar.hasAzucar(cantidadAzucar)) return 'No hay Azucar';

    vaso.giveVasos(cantidadVasos);
    this.cafe.giveCafe(vaso.contenido * cantidadVasos);
    this.azucar.giveAzucar(cantidadAzucar);
    return 'Felicitaciones';
  }
}
module.exports = MaquinaDeCafe;
