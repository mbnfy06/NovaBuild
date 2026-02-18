# 📅 PLAN DE MODERNIZACIÓN UI 2026 – FASES DE EJECUCIÓN

**Estrategia:** Implementación modular por fases para garantizar control de calidad y alineación con la visión de Dirección Creativa.

---

## 🛑 FASE 1: FUNDAMENTOS "DARK LUXURY" (Estructura & Atmósfera)
**Objetivo:** Establecer la nueva base visual sin romper la funcionalidad actual. Cambiar el "aire" de la web.

*   **1.1. Tipografía Editorial:**
    *   Implementar nueva fuente Display (ej. *Clash Display* o *Space Grotesk*) para Títulos H1-H3.
    *   Ajustar escalas: H1 masivo (>4.5rem móvil, >8rem desktop).
    *   Refinar Body Text (*Inter* o *Geist*) para legibilidad técnica.
*   **1.2. Paleta de Color "Deep Metal":**
    *   Reemplazar el negro puro (`#000`) por `Rich Black` (`#050505`).
    *   Aplicar sistema de gradientes dorados metálicos en lugar de colores planos.
    *   Integrar "Glows" sutiles (luces volumétricas) en fondos.
*   **1.3. Spacing System (El Lujo es Espacio):**
    *   Aumentar márgenes verticales (padding secciones: 160px+).
    *   Expandir `gap` entre elementos grids.

> **Entregable F1:** Una web visualmente más "cara" y limpia, con la nueva atmósfera oscura pero aún con estructura vieja.

---

## 🛑 FASE 2: HERO SECTION & IMPACTO INICIAL
**Objetivo:** Crear un "Wow Effect" inmediato al cargar la página. La primera impresión lo es todo.

*   **2.1. Hero Redesign:**
    *   Título principal inmenso con `mix-blend-mode: overlay` sobre video/imagen.
    *   Eliminar el contenedor central rígido; usar todo el ancho (full-width).
    *   Bajada de texto minimalista.
*   **2.2. Entrada Cinemática:**
    *   Animación de carga (preloader) minimalista del logo.
    *   Texto que aparece palabra por palabra ("Staggered reveal").
    *   Imagen de fondo con sutil efecto *Parallax* o *Zoom-out* lento.
*   **2.3. Navbar "Glassmorphism":**
    *   Menú flotante con desenfoque (`backdrop-filter`) intenso y bordes ultra-finos.

> **Entregable F2:** Un "Above the Fold" (primer pantallazo) que compita con estudios de diseño internacionales.

---

## 🛑 FASE 3: COMPONENTES NEXT-GEN (Servicios & Proyectos)
**Objetivo:** Romper la cuadrícula tradicional de Bootstrap/CSS Grid básica.

*   **3.1. Bento Grid (Servicios):**
    *   Reestructurar la sección de 3 columnas a un **Grid Asimétrico Inteligente**.
    *   Celdas de diferentes tamaños (2x2, 1x2, 1x1) según importancia del servicio.
    *   Efecto **"Spotlight"**: Un haz de luz sigue al mouse sobre las cards.
*   **3.2. Project Cards 3D:**
    *   Cards que reaccionan al mouse (efecto sutil de inclinación/tilt).
    *   Imágenes que se expanden dentro de la card al hacer hover.
    *   Tipografía dentro de la card con jerarquía moderna.
*   **3.3. Scroll Horizontal (Móvil):**
    *   Convertir grids verticales infinitos en *swipeable areas* horizontales en móvil.

> **Entregable F3:** Interactividad moderna. El usuario empieza a "jugar" con la interfaz.

---

## 🛑 FASE 4: DETALLES PREMIUM & MICRO-INTERACCIONES
**Objetivo:** La "Textura" y el "Feel". Lo que diferencia una web buena de una excelente.

*   **4.1. Textura Cinemática:**
    *   Overlay de "Noise" (granulado fílmico) sutil sobre toda la web.
*   **4.2. Smooth Scrolling (Mantequilla):**
    *   Implementar librería *Lenis* o similar para scroll inercial suave.
*   **4.3. Cursor Personalizado:**
    *   Cursor circular magnético que se pega a los botones y enlaces.
    *   Efecto de mezcla (`difference`) sobre imágenes oscuras.
*   **4.4. Magnetic Buttons:**
    *   Botones (CTAs) que atraen el cursor cuando te acercas.

> **Entregable F4:** Una experiencia de usuario fluida, táctil y altamente refinada.

---

## 🛑 FASE 5: OPTIMIZACIÓN FINAL & SEO
**Objetivo:** Rendimiento técnico extremo.

*   **5.1. Performance Audit:**
    *   Optimización de imágenes (WebP) y carga diferida (Lazy Load) agresiva.
*   **5.2. Código Limpio:**
    *   Refactorización final de CSS/JS para eliminar redundancias.
*   **5.3. SEO Técnico:**
    *   Revisión de etiquetas H1-H6, Alt texts y Meta descriptions con la nueva estructura.

> **Entregable F5:** Web lista para lanzamiento (Production Ready).

---

**¿Por dónde empezamos? ¿Apruebas iniciar la FASE 1 (Fundamentos y Tipografía)?**
