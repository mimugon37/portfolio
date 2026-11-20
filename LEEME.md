# Portfolio — Mia González (escritorio Mac)

Para verlo en tu compu (necesita un servidor local, no anda con doble click):

    cd ~/Documents/proyectos/portfolio
    python3 -m http.server 8000

y abrí http://localhost:8000

## Dónde está cada cosa
- **Textos (ES y EN):** `js/content.js`. Buscá `[completar]` (mail, Instagram, LinkedIn, Behance) y `[confirmar]` (tu rol en Dead Silence, tu nivel de inglés).
- **Íconos del escritorio** (qué carpeta o foto va y dónde): lista `DESK` al principio de `js/main.js`. `x` e `y` van de 0 a 1.
- **Imágenes de proyectos:** `assets/img/`. Para sumar una, ponela ahí y agregá `{ src: 'assets/img/tu-archivo.webp', name: 'nombre.png' }` en los `files` de ese proyecto en `js/content.js`.
- **Moodboard:** `assets/mood/` (sacado de tu Figma). La lista está en `MOOD` dentro de `js/content.js`. Las fotos que pasan en el widget están en `WIDGET_PICS` (en `js/main.js`).
- **Íconos de Mac:** `assets/icons/`, sacados de tu propia Mac.
- **Tipografía de tu nombre:** Positions, en `assets/fonts/`.
- **Tu foto:** hoy hay un cuadrito rosa "tu foto acá" en Notas y en "Acerca de Mia".

## Links directos
Podés mandar el link con una ventana ya abierta: `#c3po`, `#coopid`, `#planify`, `#dead`, `#kate`, `#skills`, `#notes`, `#keynote`, `#reminders`, `#terminal`, `#mail`, `#photos`, `#about`. Se pueden juntar con coma: `#c3po,notes`.
