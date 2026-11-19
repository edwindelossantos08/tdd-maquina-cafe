const { test, beforeEach } = require('node:test');
const assert = require('node:assert');
const MaquinaDeCafe = require('../src/MaquinaDeCafe');
const Vaso = require('../src/Vaso');
const Cafetera = require('../src/Cafetera');
const Azucarero = require('../src/Azucarero');

let maquina;
beforeEach(() => { maquina = new MaquinaDeCafe(); });

test('getTipoVaso devuelve el vaso pequeño', () => {
  assert.strictEqual(maquina.getTipoVaso('pequeno'), maquina.vasosPequenos);
});
test('getTipoVaso devuelve el vaso mediano', () => {
  assert.strictEqual(maquina.getTipoVaso('mediano'), maquina.vasosMedianos);
});
test('getTipoVaso devuelve el vaso grande', () => {
  assert.strictEqual(maquina.getTipoVaso('grande'), maquina.vasosGrandes);
});
test('devuelve "No hay Vasos" si no quedan vasos', () => {
  const vaso = maquina.getTipoVaso('pequeno');
  assert.strictEqual(maquina.getVasoDeCafe(vaso, 10, 2), 'No hay Vasos');
});
test('devuelve "No hay Cafe" si no queda café', () => {
  maquina.cafe = new Cafetera(5);
  const vaso = maquina.getTipoVaso('pequeno');
  assert.strictEqual(maquina.getVasoDeCafe(vaso, 1, 2), 'No hay Cafe');
});
test('devuelve "No hay Azucar" si no queda azúcar', () => {
  maquina.azucar = new Azucarero(1);
  const vaso = maquina.getTipoVaso('pequeno');
  assert.strictEqual(maquina.getVasoDeCafe(vaso, 1, 2), 'No hay Azucar');
});
test('devuelve "Felicitaciones" y descuenta inventario', () => {
  const vaso = maquina.getTipoVaso('pequeno');
  assert.strictEqual(maquina.getVasoDeCafe(vaso, 1, 2), 'Felicitaciones');
  assert.strictEqual(vaso.cantidadVasos, 4);
  assert.strictEqual(maquina.cafe.cantidadCafe, 40);
  assert.strictEqual(maquina.azucar.cantidadAzucar, 18);
});
