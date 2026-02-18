# 3️⃣ PROMPT – UI MODERNIZATION PLAN 2026

**Fecha:** 17 de Febrero de 2026  
**Proyecto:** NovaBuild Constructora  
**Analista:** Director Creativo (IA)

---

## 1. Evaluación de Modernidad ("Current State Audit")

Analizando el código actual (`index.html`, `styles.css`), la web presenta una **base sólida "Dark Modern" de 2023-2024**, pero carece de los matices "Hyper-Premium" y la interactividad fluida que definen el diseño web de alto nivel en 2026.

*   **Puntos Fuertes Actuales:**
    *   ✅ Modo oscuro bien ejecutado (`#0a0a0a`).
    *   ✅ Tipografía funcional (Outfit).
    *   ✅ Estructura clara (Hero, Nosotros, Servicios, Portfolio).
*   **Áreas de Obsolescencia (vs. 2026 Standards):**
    *   ⚠️ **Cards planas:** El diseño actual de las cards (servicios y proyectos) se siente demasiado estático y "plano". Falta profundidad y refinamiento en los bordes.
    *   ⚠️ **Grid Rígido:** La estructura de grid es demasiado convencional (columnas de 3). En 2026, el diseño asimétrico y los "Bento Grids" dominan el mercado de lujo.
    *   ⚠️ **Micro-interacciones Básicas:** Las animaciones de entrada (`scrollReveal`) son genéricas. Falta feedback háptico visual y magnetismo en elementos interactivos.
    *   ⚠️ **Tipografía Conservadora:** Aunque "Outfit" es buena, la jerarquía de tamaños es tímida para un impacto "Editorial".

---

## 2. Mejora de Jerarquía Visual

El objetivo es pasar de una estructura "informativa" a una estructura "narrativa y editorial".

*   **Hero Section ("The Statement"):**
    *   **Actualmente:** Título centrado estándar.
    *   **Propuesta 2026:** Tipografía **Display Masiva** (8rem+) que se integra con el vídeo de fondo usando máscaras de recorte (`mix-blend-mode: overlay`) o efectos de revelado por scroll.
*   **Separadores de Sección:**
    *   Eliminar líneas divisorias duras. Usar **transiciones de gradiente suaves** o mucho espacio negativo (whitespace) para separar conceptos.
*   **Contrastes Extremos:**
    *   Alternar drásticamente entre secciones de texto minimalista (mucho aire) y secciones visuales inmersivas (full-bleed images).

---

## 3. Ajustes de Tipografía

Evolucionar hacia una estética "Swiss International Style" modernizada.

*   **Headings (Títulos):** Cambiar a una **Grotesque Geométrica con carácter**.
    *   *Opción A:* **Space Grotesk** (Tech/Moderno).
    *   *Opción B:* **Plus Jakarta Sans** (Corporate/Clean).
    *   *Opción C (Luxury):* **Clash Display** (Elegante y afilada).
*   **Body (Cuerpo):** Mantener **Inter** o **Geist Sans** para máxima legibilidad técnica en tamaños pequeños.
*   **Accent (Detalles):** Una tipografía *Serif* moderna (ej. **Playfair Display**) solo para números o palabras clave muy específicas ("Premium", "Design") para elevar el tono.

**Regla de Oro 2026:**
> "Si el título no ocupa el 50% de la pantalla en móvil, no es lo suficientemente importante."

---

## 4. Ajustes de Espaciado (The "Air" Factor)

El lujo es espacio. La densidad actual es demasiado alta.

*   **Padding Vertical:** Aumentar de `120px` a `180px` o `200px` en desktop.
*   **Gap entre elementos:** Pasar de `24px/32px` a `40px/64px`.
*   **Gutter lateral:** Mantener contenedores centrados pero permitir que ciertos elementos (imágenes, sliders) rompan la grilla y toquen los bordes.

---

## 5. Paleta Recomendada ("Dark Luxury 2026")

Abandonar el "Oro plano" (`#c8a96e`) por un sistema de **metales líquidos y luces volumétricas**.

| Uso | Color (HEX/RGBA) | Descripción |
| :--- | :--- | :--- |
| **Fondo Base** | `#050505` | Casi negro absoluto, más profundo que el actual. |
| **Superficies** | `#0E0E0E` | Para cards, con ruido (noise texture) sutil. |
| **Acento Principal** | `linear-gradient(135deg, #FFD700 0%, #D4AF37 50%, #C5A028 100%)` | Oro metálico con reflejos, no plano. |
| **Acento Web3** | `#BFAACE` (Lila Hielo) o `#A0C4FF` (Azul Etéreo) | Toques sutiles en bordes (glows) para modernizar el oro clásico. |
| **Bordes** | `rgba(255, 255, 255, 0.08)` | Bordes ultra-finos, casi imperceptibles. |
| **Texto** | `#EDEDED` (Primario) / `#888888` (Secundario) | Blanco roto para evitar fatiga visual. |

---

## 6. Propuestas con Componentes Modernos

Integración de librerías visuales de vanguardia (inspiración Aceternity / Shadcn / Magic UI).

### A. Bento Grids (Para Sección Servicios)
En lugar de 3 columnas idénticas, usar un grid asimétrico.
*   **Celda 1 (Grande - 2x2):** "Reformas Integrales" (Imagen de fondo + Texto overlay).
*   **Celda 2 (Vertical):** "Obra Nueva" (Lista de características con iconos animados).
*   **Celda 3 (Pequeña):** "Interiorismo" (Solo un icono 3D flotante).
*   **Efecto:** Cada celda tiene un borde sutil que brilla al pasar el mouse (**Spotlight Effect**).

### B. Cards Elevadas & Glassmorphism
*   **Diseño:** Fondo translúcido con `backdrop-filter: blur(20px)` y un borde de 1px con gradiente sutil.
*   **Interacción:** Al hacer hover, la card no solo sube, sino que revela un **"Radial Gradient Glow"** que sigue el cursor (efecto *Magic UI*).

### C. Microanimaciones Suaves
*   **Scroll-triggered Text:** Las palabras de los títulos aparecen una a una (staggered) desde abajo con opacidad y blur.
*   **Magnetic Buttons:** Los botones principales atraen el cursor magnéticamente dentro de un radio cercano.
*   **Smooth Scroller (Lenis):** Implementar scroll inercial para una sensación de "mantequilla" al navegar.

### D. Elementos Específicos
*   **Infinite Moving Cards:** Para los testimonios o logos de confianza (Clientes/Partners), un carrusel infinito sin cortes, con velocidad variable al hacer hover.
*   **Beam Effect:** Líneas de luz que recorren los bordes de las secciones o del formulario de contacto para guiar la vista.

---

## 7. Mejora Específica para Móvil

El móvil en 2026 no es una versión reducida, es la experiencia principal.

*   **Navegación Inferior (Bottom Bar):** Estilo app. Menú hamburguesa, buscar y contacto fijo en la parte inferior para accesibilidad con el pulgar.
*   **Horizontal Scroll Snapping:** Para las Bento Grids y Proyectos. No apilar todo verticalmente infinito; permitir swipe lateral suave en secciones clave.
*   **Touch Feedback:** Efecto "Ripple" (onda) sutil al tocar cualquier elemento interactivo.

---

## 8. Cómo Elevar la Percepción Premium

*   **Noise Texture Overlay:** Una capa fija de "ruido" (grain) al 3% de opacidad sobre toda la web. Elimina la sensación "digital fría" y añade textura cinematográfica.
*   **Custom Cursor:** Un cursor personalizado (círculo pequeño) que invierte el color de lo que hay debajo (`mix-blend-mode: difference`) y se expande al pasar sobre enlaces.
*   **Fotografía Curada:** Las imágenes no pueden parecer de stock genérico. Deben tener una corrección de color desaturada y cinemática, alineada con la paleta oscura.
*   **Copywriting Minimalista:** Menos texto, más impacto. Letras más grandes, frases más cortas.

---

**Resumen de Acción:**
Si se aprueba este plan, la transformación convertirá a NovaBuild en una referencia de diseño digital, alejándola de la estética de "constructora local" y posicionándola como una **Firma de Arquitectura y Construcción Boutique**.
