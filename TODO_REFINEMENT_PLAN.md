# 🚀 NovaBuild Refinement Plan & TODOs

Este documento detalla las mejoras pendientes y sugerencias técnicas para elevar la web de NovaBuild al estándar de lujo 2026.

## ✅ Completado recientemente
- [x] **Lenis Scroll**: Implementación de scroll suave global.
- [x] **GSAP Integration**: Registro de plugins y base para animaciones de alto nivel.
- [x] **Split Text Animation**: Títulos principales animados carácter por carácter.
- [x] **Indicador de Progreso**: Barra de lectura superior con gradiente dinámico.
- [x] **Update Iconografía**: Sustitución de placeholders por iconos arquitectónicos de línea fina.

## 🛠️ TODO: Implementaciones Próximas

### 1. 🖼️ Slider Comparativo (Antes/Después)
- **Objetivo**: Mostrar la transformación técnica en rehabilitaciones.
- **Tecnología**: JS Nativo o `img-comparison-slider`.
- **Ubicación sugerida**: Sección "Proyectos" o una nueva sección "Casos de Éxito".

### 2. 🖱️ Custom Cursor (MagicUI Style)
- **Objetivo**: Crear un cursor que siga al usuario con un efecto de "trail" o "blob".
- **Comportamiento**: Debe expandirse al hacer hover sobre enlaces y botones.
- **Inspiración**: [Custom Cursor de MagicUI](https://magicui.design/docs/components/cursor).

### 3. 🍱 Bento Grid Interactivo (21.st style)
- **Objetivo**: Que las tarjetas de servicios tengan un efecto de "Border Beam" o "Glow" que siga al ratón de forma más orgánica.
- **Referencia**: [21.st components](https://21.st).

### 4. ⚡ GSAP ScrollTrigger Advanced
- **Objetivo**: Crear un efecto de "parallax" real en las imágenes de los proyectos.
- **Detalle**: Que las fotos se muevan ligeramente dentro de su contenedor al hacer scroll.

## 💡 Sugerencias de Diseño "Alta Gama"

- **Typography Mastery**: Considerar el uso de una fuente variable que cambie de grosor (weight) según el scroll o la posición del ratón.
- **Noise Texture**: Añadir una capa de "grain" muy sutil (2-3% opacidad) globalmente para dar una textura cinematográfica a los fondos oscuros.
- **Lottie Smooth Icons**: Reemplazar los SVGs estáticos por animaciones Lottie que se activen al hacer hover.
- **Dark/Light Mode Transitions**: Implementar un toggle de tema con una animación de "clipping path" circular (tipo expansión).

## 🏢 Componentes MagicUI / 21.st compatibles
Aunque estas librerías son principalmente React, podemos recrear sus efectos visuales en Vanilla JS:
1. **Shimmer Button**: Para el botón de contacto principal.
2. **Neon Gradient Card**: Para destacar el servicio de "Reformas Integrales".
3. **Typing Animation**: Para el subtítulo del hero, simulando profesionalidad técnica.
4. **Retro Grid**: Para el fondo de la sección de contacto, dando un aire de "plano arquitectónico".
