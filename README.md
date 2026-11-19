# TDD – Máquina de Café

Ejercicio de Desarrollo Guiado por Pruebas (TDD) con pipeline de CI/CD en GitHub Actions.

- `src/`: Vaso, Cafetera, Azucarero y MaquinaDeCafe
- `test/`: pruebas unitarias (`node:test`, sin dependencias)
- `.github/workflows/ci-pipeline.yml`: workflow de CI que corre en cada push y pull request

## Ejecutar pruebas
```bash
npm test
```

## Ramas
- `main`: versión estable
- `develop`: integración
- `feature/nueva-funcionalidad`: desarrollo de nuevas funciones

Autor: Edwin Alexander De Los Santos – Matrícula 2025-1032 (ITLA)
