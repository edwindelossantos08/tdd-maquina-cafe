const { test } = require('node:test');
const assert = require('node:assert');
const Vaso = require('../src/Vaso');
const Cafetera = require('../src/Cafetera');
const Azucarero = require('../src/Azucarero');

test('Vaso: devuelve true si hay vasos suficientes', () => {
  assert.strictEqual(new Vaso(2, 10).hasVasos(1), true);
});
test('Vaso: devuelve false si no hay vasos suficientes', () => {
  assert.strictEqual(new Vaso(1, 10).hasVasos(2), false);
});
test('Vaso: resta los vasos entregados', () => {
  const v = new Vaso(5, 10); v.giveVasos(1);
  assert.strictEqual(v.cantidadVasos, 4);
});
test('Cafetera: devuelve true si hay café suficiente', () => {
  assert.strictEqual(new Cafetera(10).hasCafe(5), true);
});
test('Cafetera: devuelve false si no hay café suficiente', () => {
  assert.strictEqual(new Cafetera(10).hasCafe(11), false);
});
test('Cafetera: resta el café entregado', () => {
  const c = new Cafetera(10); c.giveCafe(7);
  assert.strictEqual(c.cantidadCafe, 3);
});
test('Azucarero: devuelve true si hay azúcar suficiente', () => {
  assert.strictEqual(new Azucarero(10).hasAzucar(5), true);
});
test('Azucarero: devuelve false si no hay azúcar suficiente', () => {
  assert.strictEqual(new Azucarero(10).hasAzucar(15), false);
});
test('Azucarero: resta el azúcar entregado', () => {
  const a = new Azucarero(10); a.giveAzucar(5);
  assert.strictEqual(a.cantidadAzucar, 5);
});
