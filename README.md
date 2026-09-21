<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.5-000000?logo=nextdotjs&logoColor=white" alt="Next.js 16.3.5">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-4.2-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS 4">
</p>

<h1 align="center">414 Car Detailing (demo)</h1>

<p align="center">Landing y maqueta de reservas para un servicio de detallado de autos a domicilio. Proyecto de demostración.</p>

<p align="center">🇬🇧 <a href="README.en.md">Read in English</a></p>

> **Proyecto de demostración.** No es un negocio real, no acepta reservas y no guarda ni envía ningún dato. El nombre "414 Car Detailing" es ilustrativo: cualquier coincidencia con un negocio real es casual.

**Demo en vivo:** https://car-detailing-demo-two.vercel.app/

## Acerca del proyecto

Landing de una página y una maqueta de reservas (`/booking`), hechas con Next.js 16 (App Router), React, Tailwind CSS y Framer Motion. Presenta un servicio ficticio de detallado móvil de autos.

Es un proyecto personal, hecho para un amigo que pensaba abrir un negocio de este tipo y no siguió. No pertenece a ningún curso.

### Lo que NO es

- **No es un negocio real ni acepta reservas.**
- **No tiene backend:** no hay base de datos, rutas de API ni variables de entorno.
- **`/booking` es una maqueta:** solo usa `useState`. No hay `fetch`, `localStorage`, envío de formularios ni correo.
- **Los datos de contacto, servicios y precios son ficticios:** el teléfono `+1 (416) 555-0100`, el correo `info@example.com`, los servicios, los precios y las referencias a Toronto son de ejemplo.

## Secciones

Un banner fijo de demostración aparece arriba en `/` y en `/booking`.

| Sección | Contenido |
|---|---|
| Navbar | Logo y anclas Home, Services, About, Contact |
| Hero | Titular y botón "Book Now" hacia `/booking` |
| Services | 4 paquetes desplegables con precio por tipo de vehículo (2 plazas y SUV de 5) y extras |
| WhyChooseUs | 4 tarjetas de beneficios y una tarjeta decorativa |
| Process | 2 fases con slider antes/después (imágenes de ejemplo) |
| Gallery | Carrusel automático cada 5 s y una cuadrícula de 4 imágenes de ejemplo |
| ContactCTA y Footer | Teléfono y correo de ejemplo (texto, sin enlaces), horario, mapa de Google centrado en Toronto y enlaces rápidos |
| FloatingButtons | Botón de subir y "Book Online" hacia `/booking` |

### `/booking` (maqueta, en desarrollo)

- **Paso 1:** una tarjeta fija de servicio (Exterior Detail, 1 h, CA$80), dos extras con casilla que no se guardan, 5 días fijos de abril de 2026 y los mismos 7 horarios de 8:00 a 8:30 en todos. Elegir un horario pasa al paso 2.
- **Paso 2:** cuatro campos (nombre, apellido, teléfono y correo) sin validación. El resumen siempre dice "Friday, April 17, 2026", elijas el día que elijas. "Complete Appointment" solo muestra un aviso de que es una demo y que no se guardó nada.
- **No hay botón para volver** del paso 2 al paso 1.
- Para ser un agendamiento real le faltaría: backend con base de datos o calendario, disponibilidad real, validación, confirmación por correo, fechas dinámicas y zona horaria, y aviso de privacidad.

## Stack tecnológico

Versiones exactas de `package-lock.json` (lockfile v3):

| Paquete | Versión |
|---|---|
| Next.js / eslint-config-next | 16.3.5 |
| React / React DOM | 19.2.4 |
| TypeScript | 5.9.3 |
| Tailwind CSS y @tailwindcss/postcss | 4.2.2 |
| Framer Motion | 12.38.0 |
| lucide-react | 0.475.0 |
| clsx / tailwind-merge | 2.1.1 / 3.5.0 |
| ESLint | 9.39.4 |

- **Node:** `engines.node >= 20.9.0` (mínimo de Next 16) y `.nvmrc` con 22. Probado con Node 22.23.2 y npm 10.9.8.
- **Compilación:** Turbopack.
- **Fuentes:** Geist y Geist Mono se descargan de Google Fonts al compilar y en desarrollo, por lo que hace falta internet.

## Estructura del proyecto

```
.
├─ public/          (13 imágenes de ejemplo en SVG + 5 SVG de la plantilla, sin usar)
├─ src/
│  ├─ app/          (layout, página principal, estilos, booking/)
│  ├─ components/   (11 componentes .tsx, incluido DemoBanner)
│  └─ lib/          (utils.ts)
├─ package.json · package-lock.json · .nvmrc
├─ eslint.config.mjs · next.config.ts · postcss.config.mjs · tsconfig.json
└─ AGENTS.md · CLAUDE.md · .gitignore
```

## Cómo correrlo

Requiere Node 20.9 o superior (se recomienda 22).

```bash
git clone https://github.com/DiegoACx/car-detailing-demo.git
cd car-detailing-demo
npm ci
npm run dev      # http://localhost:3000
```

Otros comandos: `npm run build`, `npm run start` (requiere build previo) y `npm run lint`.

- No hay variables de entorno ni `.env.example`.
- **Aviso:** `next dev` regenera `AGENTS.md` (un bloque de reglas para agentes de IA). Puedes restaurarlo con `git restore AGENTS.md` o commitear el cambio.

## Imágenes

Las 13 imágenes de `public/` son **placeholders SVG** con el texto "Imagen de ejemplo". Las fotos originales se quitaron por no tener una licencia verificada.

Para usar fotos propias o con licencia clara:

1. Reemplaza los archivos de `public/` conservando el nombre, o cambia las rutas en `Hero.tsx`, `Process.tsx` y `Gallery.tsx`.
2. Redúcelas a unos 2000 px como máximo, en JPEG o WebP.
3. Anota autor, fuente y licencia de cada foto.
4. Evita placas y rostros legibles, o consigue consentimiento.
5. Actualiza los `alt` y los títulos de la galería.

## Auditoría de dependencias

- **Resultado:** `npm audit` dio **0 vulnerabilidades** el 20/09/2026 (npm 10.9.8, Node 22.23.2), sobre el lockfile actual.
- **Cómo se llegó:** Next 16.2.4 tenía 24 avisos, 2 críticos: GHSA-p293-qw3h-jr36 / CVE-2026-75604 (ejecución remota de código en servidores Windows) y GHSA-2xp9-vwfh-vxw4 (ejecución remota en la optimización de imágenes con AVIF), ambos corregidos en 16.3.3. Se subió a 16.3.5. Quedaron 6 avisos transitivos de desarrollo, que `npm audit fix` (sin `--force`) dejó en 0.
- **Qué no cubre:** solo avisos ya publicados ("0" no significa "sin vulnerabilidades"); no revisa el código, la configuración, las licencias ni la integridad de los paquetes; y los servicios de terceros (Google Fonts y el mapa de Google) quedan fuera.

## Qué se probó y qué no

**Automatizado** (Windows 11, Node 22.23.2):

- `npm run lint`: 0 errores y 6 avisos.
- `npm run build`: correcto (Next informa 5/5 páginas generadas y lista las rutas `/`, `/_not-found` y `/booking`).
- Comprobaciones HTTP sobre `next start`: `/` y `/booking` responden 200 y llevan el banner; los 13 SVG responden 200 y las rutas de las fotos antiguas dan 404.
- `npm audit`: 0 vulnerabilidades.

**Revisión manual del autor** (no cubierta por lo automatizado): revisó la app en el navegador con el servidor de desarrollo y quedó bien, incluidos el banner de demostración y los placeholders.

- Despliegue en Vercel (plan Hobby, Next.js): funcionando, verificado por el autor.

**No verificado:**

- Linux y macOS.
- Node 20.9 y `npm ci` en un clon limpio.
- Móvil real y otros navegadores.
- Auditoría de accesibilidad y Lighthouse.

## Limitaciones

- **Accesibilidad pendiente:** dos `<h1>` en la home, `alt` genéricos, `<iframe>` del mapa sin `title`, botones de solo icono sin nombre accesible, etiquetas de formulario sin `htmlFor`. No se revisaron contraste ni `prefers-reduced-motion`.
- **6 avisos de lint** `@next/next/no-img-element`: se usan `<img>` en lugar de `next/image`.
- **Sin tests.**
- **Texto de ejemplo:** Toronto y el GTA, precios ficticios, fechas fijas de abril de 2026 (ya pasadas), etiquetas "TOMORROW" obsoletas y frases de marketing como "Toronto's Premier".
- **Restos de diseño:** la tarjeta decorativa de "WhyChooseUs" quedó sin texto y la animación `scan` no está definida.
- **Terceros:** el mapa de Google contacta a Google al cargarse.
- El CSS declara la fuente Inter, pero se carga Geist.

## Historia del proyecto

Se creó con `create-next-app` en abril de 2026. En septiembre de 2026 se preparó como demo pública:

- **Dependencias:** Next 16.2.4 → 16.3.5 por 2 avisos críticos; `engines.node` y `.nvmrc`.
- **Lint:** se corrigieron 11 errores (apóstrofes sin escapar) y los imports sin usar.
- **Datos de ejemplo:** teléfono del rango 555-01xx (reservado para ficción) y correo `example.com` (reservado por RFC 2606); se quitó un nombre propio del servicio de `/booking`.
- **Contenido sin verificar:** se quitaron afirmaciones como "Certified specialists", un componente con cifras inventadas y los enlaces genéricos a redes sociales.
- **Banner de demostración** en todas las páginas y un mensaje de demo en lugar de "Booking complete!".
- **Imágenes:** las 13 fotos originales se sustituyeron por placeholders SVG y los títulos de la galería son neutros.
- **Historial:** este repositorio se publicó con un historial nuevo, sin las fotos originales.

## Licencia

Este repositorio no incluye un archivo `LICENSE`, por lo que el código queda con todos los derechos reservados. Las licencias de las dependencias no se verificaron.

## Autor

- Diego Castro — [@DiegoACx](https://github.com/DiegoACx)

El proyecto se desarrolló con asistencia de Claude (Anthropic).
