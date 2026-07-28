# Ejercicio 4 - Reloj Digital

Reloj digital en tiempo real desarrollado con Bootstrap y JavaScript vanilla. Muestra la hora en formato 12hs con AM/PM, los segundos y la fecha completa, actualizándose automáticamente cada segundo.

## Tecnologías utilizadas

- HTML5
- CSS3 (fuente Oswald via Google Fonts)
- JavaScript (ES6+)
- Bootstrap 5.3.8 (CDN)

## Cómo ejecutar

1. Cloná el repositorio.
2. Abrí `index.html` en el navegador.
3. El reloj comienza a funcionar automáticamente.

## Funcionalidades

- Hora en formato 12hs con indicador AM/PM.
- Segundos mostrados en bloque secundario junto al AM/PM.
- Fecha completa con día de la semana, día, mes y año en español.
- La fecha solo se actualiza en el DOM cuando cambia el día, evitando renders innecesarios.
- Horas, minutos y segundos siempre con dos dígitos usando `padStart`.
- Diseño responsive con tipografía Oswald y gradiente de fondo.

## Autor

Francisco Sandoval
