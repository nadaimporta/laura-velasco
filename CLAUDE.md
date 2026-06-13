# Laura Velasco · Contexto para Claude

## Quién es Laura

Artista e ilustradora madrileña afincada en Valencia desde 2017. Trabaja con acrílico, gouache, acuarela, caligrafía y gesto. Su obra se mueve entre la abstracción lírica y el expresionismo emocional: el color como escritura simbólica (el rosa como verdad y cobijo, el blanco como mirada limpia, el azul como el peso del mundo adulto). Los lienzos son, en sus palabras, "pequeñas conquistas emocionales" que trazan un viaje desde la infancia hasta la madurez.

Su obra se inscribe en una corriente internacional de pintoras que devuelven a la abstracción su dimensión más humana. Frase clave: *«Pinto desde las emociones, intentando ser libre, vivir con luz»*.

Ha expuesto en El Palace Barcelona, el Jardín Botánico de Valencia y galerías en Valencia. Prensa: Harper's Bazaar, Condé Nast Traveler, Vanity Fair, Valencia Plaza. Encargos: Netflix, Dior, Kenzo Parfums, Emporio Armani, Tous, Gran Meliá, Zara Home, Only YOU Hotels, Cruz Roja España, Rabat, Bodegas Chozas Carrascal, Círculo de Tiza.

**Importante:** referirse siempre a ella como "Laura" o "Laura Velasco", nunca solo "Velasco".

## Objetivos de la web

1. **Galerías** — posicionarla como artista con discurso propio, trayectoria y presencia en prensa de primer nivel.
2. **Prensa** — facilitar que periodistas encuentren toda la info necesaria sin fricción.
3. **Marcas y agencias** — demostrar que su universo ilustrado es transferible a proyectos comerciales de alto nivel. No es diseño gráfico: es arte aplicado.

## La web

Stack: HTML + CSS + JS estático. Sin frameworks. Fuentes: Cormorant Garamond + DM Sans (Google Fonts).

Servidor local: `npx serve web -p 3456`

Referencia de diseño: Jadé Fadojutimi — obra a pantalla completa, tipografía fina, máximo espacio en blanco.

### Estado actual (2026-06-13)

- **Hero:** slideshow de 6 pinturas a pantalla completa, rotación cada 5s con crossfade. Frase de Laura + firma flotando abajo.
- **Nav:** solo logo SVG + botón EN + hamburger. Fondo transparente sobre el hero, crema al hacer scroll.
- **Menú:** panel full-screen oscuro, links en serif itálica grande.
- **About:** pull-quote grande + bio aprobada (3 párrafos) + foto laura-naturaleza.jpg.
- **Exposiciones:** individuales, colecciones y colectivas. Títulos 26px serif itálica.
- **Encargos:** texto aprobado + lista de marcas en serif itálica fluida con · separadores.
- **Prensa:** citas en 20px serif itálica, publicación en caps pequeñas.
- **Contacto:** email + Instagram + donación Fundación Benjamín Mehnert.

### Próximas fases (más allá de la web)

- **Estrategia de prensa:** identificar medios de estilo de vida relevantes, redactar nota de prensa, preparar dossier de artista listo para enviar.
- **Estrategia de marcas:** definir el pitch para marcas y agencias creativas, identificar targets, preparar el portfolio de encargos.
- **Instagram:** estrategia de contenido alineada con el posicionamiento de la web.

### Pendiente

- Añadir imágenes de encargos a la sección Encargos: Netflix ("Toda la verdad de mis mentiras") y Condé Nast Traveler. El usuario tiene los archivos — cuando los ponga en la carpeta del proyecto, comprimir con `sips -Z 1600 --setProperty formatOptions 75` y añadir grid en la sección.
