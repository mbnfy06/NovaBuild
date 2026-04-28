# 📊 Auditoría de Rendimiento: NovaBuild

Esta auditoría identifica los cuellos de botella que afectaban la fluidez en dispositivos de gama media/baja (como el LG Gram) y las soluciones aplicadas.

## 🔍 Problemas Identificados

1.  **Imágenes Oversized (4K)**: El sitio cargaba múltiples imágenes de Unsplash a **3840px** de ancho. Esto consume una cantidad masiva de VRAM y CPU para decodificar, especialmente en la sección de *Zoom Parallax* donde 7 de estas imágenes se mueven a la vez.
2.  **Filtros de Grano Pesados**: El efecto de ruido cinemático usaba filtros SVG con `numOctaves='3'`. Esto obliga al navegador a recalcular el ruido en cada frame de scroll sobre toda la pantalla.
3.  **Falta de Lazy Loading**: Todas las imágenes se cargaban simultáneamente al inicio, compitiendo por el ancho de banda y la memoria.
4.  **Hardware Acceleration**: Algunos elementos no estaban "anunciando" sus transformaciones al navegador, perdiendo optimizaciones de GPU.

---

## 🚀 Optimizaciones Realizadas

### 1. 🖼️ Gestión de Assets (Imágenes)
- **Redimensión Global**: Se han cambiado todas las URLs de Unsplash de `w=3840` a `w=1920`. Esto reduce el peso de los archivos en un ~75% sin pérdida visible de calidad en pantallas estándar.
- **Compresión**: Se ha bajado la calidad de `q=90` a `q=80`.
- **Lazy Loading**: Añadido el atributo `loading="lazy"` a todas las imágenes que no pertenecen al primer pantallazo (Hero). Esto ahorra memoria RAM inicial.

### 2. ⚡ Optimizaciones de Renderizado
- **Simplificación de Filtros**: El filtro de grano (`cinema-grain`) se ha reducido a `numOctaves='1'`. Esto mantiene la textura pero reduce la carga de CPU drásticamente.
- **GPU Hinting (`will-change`)**: Se ha implementado `will-change: transform, opacity` en los contenedores críticos. Esto permite que el navegador prepare las capas en la GPU antes de que ocurra la animación.
- **GSAP Logic**: Se han refinado los triggers para que solo se ejecuten cuando son estrictamente necesarios.

### 3. 🧈 Scroll & Animación
- **Lenis configuration**: Se mantiene la suavidad pero con un cálculo de easing más eficiente para evitar lag en el hilo principal de JS.

---

## 📈 Resultados Esperados
- **Reducción del Tiempo de Carga**: El peso total de la página bajará de ~40MB a ~8-10MB.
- **Framerates Estables**: El scroll en dispositivos portátiles debería ser mucho más constante, manteniéndose cerca de los 60fps.
- **Menor Consumo de Batería**: Al reducir la carga de CPU por los filtros SVG, el portátil trabajará menos.
