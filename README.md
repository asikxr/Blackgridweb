# BlackGrid - Agencia de Diseño Web

Una página web profesional y moderna para una agencia especializada en diseño y desarrollo web.

## 🌟 Características

### ✨ Carrusel de Anuncios
- Muestra automáticamente los 5 anuncios (Ad0.png a Ad4.png)
- Cambio automático cada 5 segundos
- Controles manuales con botones de navegación
- Indicadores interactivos para saltar entre slides
- Se detiene la reproducción automática al pasar el mouse
- Navegación por teclado (flechas izquierda/derecha)

### 🌓 Modo Claro y Oscuro
- Cambio de tema con botón en el header
- Detección automática de preferencias del sistema
- Logos dinámicos: 
  - LogoWhitemode.png para modo claro
  - LogoDarkmode.png para modo oscuro
- Persistencia de preferencia en localStorage
- Transiciones suaves entre temas

### 🎨 Diseño Moderno y Minimalista
- Basado en el estilo de los anuncios (diseño simple y limpio)
- Tipografía elegante y legible
- Uso eficiente del espacio en blanco
- Estructura responsive para todos los dispositivos
- Iconos SVG simples y refinados

### 🎬 Animaciones Suaves
- Animaciones de entrada al cargar la página
- Efectos hover en botones y tarjetas
- Animaciones en scroll
- Efecto parallax suave en la sección hero
- Transiciones fluidas entre estados

### 📱 Responsive Design
- Adaptación perfecta a móviles, tablets y escritorio
- Menú adaptativo
- Grid flexible para features
- Imágenes optimizadas

## 📁 Estructura de Archivos

```
BlackGrid/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos y animaciones
├── script.js           # Lógica del carrusel y temas
└── Resources/
    ├── Ad0.png         # Anuncio 0
    ├── Ad1.png         # Anuncio 1
    ├── Ad2.png         # Anuncio 2
    ├── Ad3.png         # Anuncio 3
    ├── Ad4.png         # Anuncio 4
    ├── LogoWhitemode.png   # Logo modo claro
    └── LogoDarkmode.png    # Logo modo oscuro
```

## 🚀 Cómo Usar

### Abrir la Página
1. Abre `index.html` en tu navegador favorito
2. La página se cargará con el tema detectado de tu sistema
3. Haz clic en el botón de luna/sol para cambiar entre temas

### Navegar el Carrusel
- **Botones de flechas**: Navega entre anuncios
- **Indicadores**: Haz clic en cualquier indicador para ir a ese anuncio
- **Teclado**: Usa las flechas izquierda/derecha
- **Automático**: Los anuncios avanzan cada 5 segundos (se pausa al pasar el mouse)

## 🎯 Secciones de la Página

1. **Header**: Logo, nombre de marca y botón de tema
2. **Hero**: Título principal y call-to-action
3. **Carrusel de Soluciones**: Galería de 5 anuncios con controles interactivos
4. **Características**: 4 tarjetas con features principales
5. **CTA**: Sección de llamada a la acción
6. **Footer**: Enlaces y redes sociales

## 🎨 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #000000;
    --secondary-color: #ffffff;
    --text-color: #000000;
    /* ... más colores ... */
}
```

### Modificar Contenido
- Edita los textos en `index.html`
- Ajusta los tiempos de transición
- Modifica las animaciones en `styles.css`

### Agregar Más Anuncios
Para agregar más de 5 anuncios:
1. Agrega las imágenes a `Resources/`
2. Crea nuevos `<div class="carousel-slide">` en el HTML
3. Actualiza `totalSlides` en `script.js`
4. Agrega indicadores correspondientes

## 🌐 Navegadores Compatibles

- Chrome/Edge (versiones recientes)
- Firefox (versiones recientes)
- Safari (versiones recientes)
- Móviles (iOS Safari, Chrome Mobile)

## 💡 Características Técnicas

- **CSS Variables**: Para fácil personalización de temas
- **Flexbox y Grid**: Para layouts responsivos
- **Intersection Observer**: Para animaciones eficientes en scroll
- **localStorage**: Para persistencia de preferencias
- **Media Queries**: Para diseño adaptativo
- **Backdrop Filter**: Para efectos modernos en el header

## 📝 Notas

- La página está completamente funcional sin dependencias externas
- Todos los estilos están incluidos en un único archivo CSS
- JavaScript es vanilla (sin frameworks)
- Optimizado para SEO
- Accesibilidad mejorada con etiquetas ARIA

---

**BlackGrid** - Agencia de diseño web profesional | 2026
