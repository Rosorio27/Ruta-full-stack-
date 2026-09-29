import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn', // Te avisa con una línea amarilla si dejas variables muertas
      'no-console': 'off', // Te permite usar console.log/error en tus laboratorios de desarrollo
      eqeqeq: 'error', // Te obliga a usar triple igual (===) para evitar errores lógicos de comparación
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
];
