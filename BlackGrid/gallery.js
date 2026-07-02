// ================================
// GALERÍA - FILTRADO DE CATEGORÍAS
// ================================

(function() {
    // Función para inicializar los event listeners de filtrado
    function initGalleryFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        if (filterBtns.length === 0 || galleryItems.length === 0) {
            console.log('Elementos de galería no encontrados');
            return;
        }

        filterBtns.forEach((btn) => {
            btn.addEventListener('click', function() {
                // Remover clase active de todos los botones
                filterBtns.forEach((b) => b.classList.remove('active'));
                
                // Agregar clase active al botón clickeado
                this.classList.add('active');
                
                // Obtener el filtro
                const filter = this.getAttribute('data-filter');
                
                // Filtrar items
                galleryItems.forEach((item) => {
                    const category = item.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        item.classList.remove('hidden');
                        // Re-activar animación
                        item.style.animation = 'none';
                        setTimeout(() => {
                            item.style.animation = '';
                        }, 10);
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
        
        console.log('✨ Filtros de galería inicializados correctamente');
    }

    // Intentar inicializar cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGalleryFilters);
    } else if (document.readyState === 'interactive') {
        // Si el documento está en estado interactive (después de DOMContentLoaded pero antes de load)
        initGalleryFilters();
    } else {
        // Si el documento ya está completamente cargado
        setTimeout(initGalleryFilters, 0);
    }
    
    // Intenta ejecutar después de un pequeño delay para asegurar
    setTimeout(initGalleryFilters, 100);
})();

// ================================
// TEMA CLARO/OSCURO (compartido con index.html)
// ================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const logoSvg = document.getElementById('logo');

// Rutas de logo para modo claro/oscuro
const logoPathLight = 'Resources/LogoWhitemode.png';
const logoPathDark = 'Resources/LogoDarkmode.png';

// Inicializar tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        setTheme(prefersDark.matches ? 'dark' : 'light');
    }
}

// Establecer tema
function setTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (logoSvg) logoSvg.src = logoPathDark;
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        if (logoSvg) logoSvg.src = logoPathLight;
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

// Event listener para el botón de tema
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// Inicializar tema
initTheme();

console.log('✨ BlackGrid - Galería Web cargada correctamente');
