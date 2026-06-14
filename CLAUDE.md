# Laura Velasco · Contexto para Claude

## Quién es Laura

Artista e ilustradora madrileña afincada en Valencia desde 2017. Trabaja con acrílico, gouache, acuarela, caligrafía y gesto. Su obra se mueve entre la abstracción lírica y el expresionismo emocional: el color como escritura simbólica (el rosa como verdad y cobijo, el blanco como mirada limpia, el azul como el peso del mundo adulto). Los lienzos son, en sus palabras, "pequeñas conquistas emocionales" que trazan un viaje desde la infancia hasta la madurez.

Su obra se inscribe en una corriente internacional de pintoras que devuelven a la abstracción su dimensión más humana. Frase clave: *«Pinto desde las emociones, intentando ser libre, habitar la luz»*.

Ha expuesto en El Palace Barcelona, el Jardín Botánico de Valencia y galerías en Valencia. Prensa: Harper's Bazaar, Condé Nast Traveler, Vanity Fair, Valencia Plaza. Encargos: Netflix, Dior, Kenzo Parfums, Emporio Armani, Tous, Gran Meliá, Zara Home, Only YOU Hotels, Cruz Roja España, Rabat, Bodegas Chozas Carrascal, Círculo de Tiza.

**Importante:** referirse siempre a ella como "Laura" o "Laura Velasco", nunca solo "Velasco".

## Obras por año

Las imágenes en `web/assets/obras/` llevan el año como prefijo:

### 2026 (Sama Art Gallery + Jardín Botánico)
- `2026-playground.jpg` — *Playground*
- `2026-cobijo.jpg` — *Cobijo*
- `2026-momento.jpg` — *Momento*
- `2026-presente.jpg` — *Presente*

### 2025 (Reasons, exposición individual)
- `2025-reasons.jpg` — *Reasons* (vista general)
- `2025-reasons-01.jpg` — detalle
- `2025-reasons-02.jpg` — detalle

### 2024 (Libertad, El Palace Barcelona)
- `2024-compasion.jpg` — *Compasión*
- `2024-ligereza.jpg` — *Ligereza*
- `2024-a-salvo.jpg` — *A salvo*
- `2024-me-veo.jpg` — *Me veo*
- También de esta época: Hogar, Juego, Sentir, Soltar, Todo es ahora, Túnel del amor, Qué quiero (sin prefijo de año aún)

### Años anteriores (2023, Staying Valencia — "¿Qué es un hogar?")
- Obras: Juntitos, Mañana de sábado, Reconstrucción, entre otras

## Exposiciones

| Año | Título | Lugar |
|---|---|---|
| 2023 | *¿Qué es un hogar?* | Staying Valencia, Valencia |
| 2024 | *Libertad* | Hotel El Palace, Barcelona |
| 2025 | *Reasons* | Exposición individual, Valencia |
| 2026 | *(colectiva — Group Show)* | Sama Art Gallery, Valencia · Abr–Jun 2026 |
| 2026 | *(individual, próximamente)* | Jardín Botánico · Estufa Fría, Valencia |

## Fotografías de Laura

En Dropbox hay dos fotos de ella:
- `laura.jpg` — retrato
- `Laura en Formentera.jpg` — retrato en exterior
- `laura-naturaleza.jpg` — la que usa la web actualmente (en `web/assets/laura/`)

## Encargos pendientes de añadir a la web

- **Netflix** — "Toda la verdad de mis mentiras" (imagen disponible en Dropbox)
- **Condé Nast Traveler** — imagen disponible en Dropbox
- Flujo cuando estén listos: comprimir con `sips -Z 1600 --setProperty formatOptions 75` → mover a `web/assets/encargos/` → añadir grid en sección Encargos del HTML

## Objetivos de la web

1. **Galerías** — posicionarla como artista con discurso propio, trayectoria y presencia en prensa de primer nivel.
2. **Prensa** — facilitar que periodistas encuentren toda la info necesaria sin fricción.
3. **Marcas y agencias** — demostrar que su universo ilustrado es transferible a proyectos comerciales de alto nivel. No es diseño gráfico: es arte aplicado.

## La web

Stack: HTML + CSS + JS estático. Sin frameworks. Fuentes: Cormorant Garamond + DM Sans (Google Fonts).

Servidor local: `npx serve web -p 3456`

Referencia de diseño: Jadé Fadojutimi — obra a pantalla completa, tipografía fina, máximo espacio en blanco.

### Estado actual (2026-06-14)

- **Hero:** slideshow de las 4 obras de 2026 a pantalla completa, rotación cada 5s con crossfade. Título de obra en pequeño itálica abajo a la derecha. Frase «Pinto desde las emociones, intentando ser libre, habitar la luz» + firma abajo.
- **Nav:** solo logo SVG + botón EN + hamburger. Fondo transparente sobre el hero, crema al hacer scroll.
- **Menú:** panel full-screen oscuro, links en serif itálica grande.
- **About:** pull-quote grande + bio aprobada (3 párrafos, sin "sin ironía y sin distancia") + foto laura-naturaleza.jpg con parallax. Sin bloque de metadatos (Origen/Base/Técnicas eliminado).
- **Exposiciones:** individuales, colecciones y colectivas. Títulos 26px serif itálica.
- **Encargos:** "Proyectos a medida para marcas y agencias que buscan universos ilustrados." + lista de marcas en serif itálica fluida con · separadores.
- **Prensa:** citas en 20px serif itálica, publicación en caps pequeñas.
- **Contacto:** ¿Hablamos? + email + Instagram. Sin mención a Fundación Benjamín Mehnert (lo decide por exposición).

### Próximas fases (más allá de la web)

- **Estrategia de prensa:** identificar medios de estilo de vida relevantes, redactar nota de prensa, preparar dossier de artista listo para enviar.
- **Estrategia de marcas:** definir el pitch para marcas y agencias creativas, identificar targets, preparar el portfolio de encargos.
- **Instagram:** estrategia de contenido alineada con el posicionamiento de la web.
