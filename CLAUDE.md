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

---

## Estructura del repositorio

```
laura-velasco/
├── CLAUDE.md          # Este archivo
├── BRIEF.md           # Brief estratégico original
├── vercel.json        # Config de despliegue (outputDirectory: "web")
└── web/               # Raíz del sitio estático
    ├── index.html     # Único HTML — SPA de una sola página
    ├── style.css      # Todos los estilos
    ├── main.js        # Toda la lógica JS
    └── assets/
        ├── icons/     # SVGs: logo.svg, favicon.svg, monograma.svg, icono.svg
        ├── obras/     # 18 JPGs de pinturas (ver lista abajo)
        └── laura/     # Fotos de Laura: laura.jpg, laura-naturaleza.jpg
```

### Imágenes de obra (`web/assets/obras/`)

Hero slideshow (en orden): `playground.jpg`, `compasion.jpg`, `cobijo.jpg`, `tunel-del-amor.jpg`, `ligereza.jpg`, `reasons.jpg`

Resto del catálogo: `a-salvo.jpg`, `hogar.jpg`, `juego.jpg`, `me-veo.jpg`, `momento.jpg`, `presente.jpg`, `que-quiero.jpg`, `reasons-01.jpg`, `reasons-02.jpg`, `sentir.jpg`, `soltar.jpg`, `todo-es-ahora.jpg`

---

## Stack técnico

- **HTML + CSS + JS estático.** Sin frameworks, sin bundler, sin dependencias npm.
- **Fuentes:** Cormorant Garamond (serif) + DM Sans (sans) — Google Fonts.
- **Despliegue:** Vercel. Config en `vercel.json`: `outputDirectory: "web"`, sin build command.
- **Servidor local:** `npx serve web -p 3456`
- **Referencia de diseño:** Jadé Fadojutimi — obra a pantalla completa, tipografía fina, máximo espacio en blanco.

---

## Sistema de diseño

### Paleta de colores (`style.css` `:root`)

| Variable       | Valor       | Uso                                      |
|----------------|-------------|------------------------------------------|
| `--cream`      | `#F7F3ED`   | Fondo principal                          |
| `--cream-mid`  | `#EFE9E0`   | Fondo secundario / hover suave           |
| `--ink`        | `#1C1916`   | Texto principal                          |
| `--ink-mid`    | `#4A3F35`   | Texto secundario                         |
| `--ink-soft`   | `#7A6E63`   | Texto terciario                          |
| `--ink-muted`  | `#9B8E82`   | Labels y metadatos                       |
| `--blue`       | `#065FA3`   | Acento (reservado, color del adulto)     |
| `--pink`       | `#E8A0B0`   | Acento (verdad y cobijo)                 |
| `--border`     | `rgba(74,63,53,.18)` | Bordes sutiles                  |

### Tipografía

- **`--serif`** (`Cormorant Garamond`): pull-quotes, títulos de expo, citas de prensa, links del menú — siempre en itálica o peso ligero.
- **`--sans`** (`DM Sans`): cuerpo de texto, labels, botones — weight 300–400.
- **Escala:** `clamp()` para tipografía fluida. Labels de sección: `10px` uppercase `letter-spacing: .16em`.

### Layout

- Contenedor: `max-width: 1200px`, padding `0 40px` (responsive desde `40px` hasta `16px`).
- Nav fija: `64px` de altura (`--nav-h`).
- Breakpoints: `1024px`, `768px`, `480px`.

---

## Secciones del HTML (`web/index.html`)

El sitio es una SPA de una sola página. Secciones en orden:

| ID / Anchor      | Clase CSS               | Descripción                                                   |
|------------------|-------------------------|---------------------------------------------------------------|
| `#nav`           | `.nav`                  | Cabecera fija: logo SVG + botón idioma + hamburger            |
| `#mobileMenu`    | `.menu-panel`           | Panel full-screen oscuro — links de sección + Instagram       |
| Hero (sin ID)    | `.hero`                 | Slideshow 6 obras, crossfade, dots, tagline + firma           |
| `#about`         | `.section-about`        | Pull-quote + bio (3 párrafos aprobados) + foto naturaleza     |
| `#exposiciones`  | `.section-expos`        | Grid 2 cols: Individuales / Colecciones + Colectivas          |
| `#encargos`      | `.section-encargos`     | Intro text + lista de clientes en serif itálica + CTA         |
| `#prensa`        | (sin clase específica)  | Grid de 5 citas de prensa en serif itálica                    |
| `#contacto`      | `.section-contacto`     | Email + Instagram + donación Fundación Benjamín Mehnert       |
| Footer           | `.footer`               | Monograma SVG + copyright + Instagram                         |
| Lightbox         | `#lightbox`             | Dialog modal con prev/next — preparado para futura galería    |

**Nota sobre el Lightbox:** El HTML del lightbox está implementado y los controles JS también, pero actualmente no hay `.strip-item` en el DOM — la galería de obra pendiente de añadir lo activará.

---

## Sistema bilingüe (ES / EN)

Todos los textos traducibles usan atributos `data-es` y `data-en` en el elemento HTML. El JS lee el atributo correspondiente al idioma activo y actualiza el DOM.

```html
<span data-es="Sobre Laura" data-en="About">Sobre Laura</span>
```

**Reglas de `applyLang()` en `main.js`:**
- Si el texto contiene `<` → usa `innerHTML` (para negritas, `<br>`, etc.).
- Para `INPUT` / `TEXTAREA` → actualiza `placeholder`.
- Para el resto → usa `textContent`.
- Los `.gallery-item` tienen `data-title-es` / `data-title-en` para títulos de overlay.

El idioma por defecto es `es`. El botón en la nav muestra el idioma alternativo (`EN` cuando está en español).

---

## Lógica JavaScript (`web/main.js`)

Cinco módulos independientes, sin clases ni imports:

1. **Language toggle** — alterna `lang` entre `'es'` y `'en'`, llama a `applyLang()`.
2. **Nav scroll** — añade clase `.scrolled` al `<header>` cuando `scrollY > 20` (fondo crema + borde).
3. **Menu panel** — `openMenu()` / `closeMenu()` con ARIA, bloqueo de scroll, cierre con Escape.
4. **Hero slideshow** — `setInterval` 5000ms, dots clicables reinician el timer, crossfade via clase `.active`.
5. **Lightbox** — abre desde `.strip-item` (galería futura), navegación con teclado (←/→/Escape), click fuera cierra.
6. **Fade-in scroll** — `IntersectionObserver` con `threshold: 0.08` sobre `.press-item`, `.expo-item`, `.about-grid`.

---

## Estado actual (2026-06-14)

- **Hero:** slideshow de 6 pinturas a pantalla completa, rotación cada 5s con crossfade. Frase de Laura + firma flotando abajo.
- **Nav:** solo logo SVG + botón EN + hamburger. Fondo transparente sobre el hero, crema al hacer scroll.
- **Menú:** panel full-screen oscuro, links en serif itálica grande.
- **About:** pull-quote grande + bio aprobada (3 párrafos) + foto `laura-naturaleza.jpg`.
- **Exposiciones:** individuales (2023, 2024, 2026 upcoming), colecciones (Reasons 2025), colectivas (Pigmento Vivo 2026). Títulos en serif itálica.
- **Encargos:** texto aprobado + lista de 12 marcas en serif itálica fluida con `·` separadores + botón CTA.
- **Prensa:** 5 citas en serif itálica (Harper's Bazaar ×1, Condé Nast Traveler ×2, Vanity Fair ×1, Valencia Plaza ×1).
- **Contacto:** `hola@lauravelasco.me` + `@lauravelascoart` + donación Fundación Benjamín Mehnert (15%).
- **Footer:** monograma SVG + © 2026 + Instagram.
- **Lightbox:** implementado en JS y HTML, inactivo hasta que se añada la galería de obra.

---

## Convenciones para editar

- **No añadir frameworks.** El sitio es HTML + CSS + JS puro intencionalmente.
- **No añadir comentarios superfluos.** El código ya tiene comentarios de sección suficientes.
- **Texto siempre bilingüe.** Cualquier texto nuevo debe tener `data-es` y `data-en`.
- **Imágenes:** comprimir antes de añadir con `sips -Z 1600 --setProperty formatOptions 75 archivo.jpg`. Colocar en `web/assets/obras/` o `web/assets/laura/` según corresponda.
- **Paleta:** no introducir colores fuera de las variables CSS definidas en `:root`.
- **Tipografía:** `--serif` para elementos artísticos/emocionales, `--sans` para UI y cuerpo. Nunca mezclar al revés.
- **No crear archivos adicionales** (JS, CSS) — todo va en los tres archivos existentes.

---

## Pendiente

- **Imágenes de encargos:** añadir a `#encargos` las imágenes de Netflix ("Toda la verdad de mis mentiras") y Condé Nast Traveler. El usuario tiene los archivos — cuando los ponga en la carpeta del proyecto:
  1. Comprimir: `sips -Z 1600 --setProperty formatOptions 75 nombre.jpg`
  2. Mover a `web/assets/obras/` (u otra carpeta si se prefiere separar encargos)
  3. Añadir grid de imágenes en la sección `#encargos` antes de la lista de clientes.

---

## Próximas fases (más allá de la web)

- **Galería de obra:** implementar `.strip-item` para activar el lightbox existente con el catálogo completo.
- **Estrategia de prensa:** identificar medios de estilo de vida relevantes, redactar nota de prensa, preparar dossier de artista.
- **Estrategia de marcas:** definir el pitch para marcas y agencias creativas, identificar targets, preparar portfolio de encargos.
- **Instagram:** estrategia de contenido alineada con el posicionamiento de la web.
