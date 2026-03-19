# 🚀Landing Page Template

Una plantilla base y biblioteca de componentes UI de alto rendimiento, diseñada para la rápida creación de *Landing Pages* y sitios web corporativos en Cloudstudio o agencias de desarrollo en general. Construida desde cero enfocándose en la velocidad de carga, la escalabilidad técnica y la mantenibilidad a largo plazo sin depender de frameworks externos.

## ✨ Características Principales

*   **⚡ Cero Dependencias:** Todo el ecosistema está construido con Vanilla HTML5, CSS3 y JavaScript ES6+. Sin React, sin Tailwind, sin jQuery.
*   **🏗️ Arquitectura BEM Estricta:** Las clases CSS siguen el patrón Block Element Modifier (`.bloque__elemento--modificador`), garantizando un aislamiento total de estilos. Los componentes son 100% agnósticos a su contenedor padre.
*   **🎨 Sistema de Diseño (CSS Variables):** Control centralizado de todos los tokens visuales (colores, tipografías, espaciados, sombras) mediante CSS Custom Properties implementadas globalmente.
*   **🧩 JavaScript Modular y Desacoplado:** Lógica fragmentada en módulos ES6 orientada exclusivamente a atributos de estado o selectores técnicos separados (`.js-*`), protegiéndola contra roturas si el equipo de diseño altera estilos visuales en un futuro.
*   **📱 100% Responsivo (Mobile-First):** Diseños adaptados a resoluciones fluidas estructurados mediante Flexbox avanzado y Grid.

## 📂 Estructura de Archivos

```text
├── index.html                   # Documento principal y estructura semántica dividida por bloques
├── css/
│   ├── main.css                 # Importador global (Core file)
│   ├── base/                    # Normalización (reset.css) y tokens dinámicos globales (variables.css)
│   ├── components/              # Elementos atómicos aislados y agnósticos (buttons.css, cards.css, carousel.css)
│   └── sections/                # Bloques lógicos ensamblados en vista horizontal (hero.css, header.css, contact.css)
└── js/
    ├── main.js                  # Orquestador e inicializador principal de JS
    └── modules/                 # Lógica interactiva aislada e instanciable (navigation.js, carousel.js, timeline.js)
```

## 🛠️ Guía de Personalización Rápida (Para Nuevos Clientes)

Para adaptar este proyecto a la identidad corporativa de un cliente nuevo en minutos, **solo necesitas editar un único archivo**. Todo el sistema de la web (desde sombras tenues hasta gradientes RGB y texto) reaccionará automáticamente a esta manipulación.

1.  Abre el archivo de sistema base: `css/base/variables.css`.
2.  Bajo la directiva `:root`, modifica los siguientes valores:

```css
/* css/base/variables.css */
:root {
    /* 1. Colores de Identidad Corporativa (Es fundamental definir la versión RGB para canal Alpha) */
    --color-primary-rgb: 0, 102, 255; /* Base RGB (Sin 'rgb()') */
    --color-primary: #0066ff;         /* Hexadecimal de resalte sólido */
    --color-primary-dark: #0044cc;    /* Variación oscura para el estado Hover de Botones e Íconos */
    
    /* 2. Paleta Neutra o Dark Mode */
    --color-dark: #121212;
    --color-dark-alt: #1a1a1b;   /* Usado en tarjetas de carruseles oscuros y background del timeline */
    --color-bg-light: #f8f9fa;   /* Utilizado de fondo para la grilla de testimonios ligeros */

    /* 3. Tipografía Principal Corporativa */
    --font-main: 'Poppins', sans-serif;
    
    /* 4. Sistema Modular de Bordes (Radios) */
    --radius-sm: 4px;
    --radius-md: 8px; /* Ejemplo: Cambiar a '0' para transformar la UI a un diseño estricto Sharp minimalista */
    --radius-lg: 16px;
}
```

## 🏗️ Guía de Uso de Componentes (Reciclaje Agil)

Gracias a la estricta encapsulación del CSS, puedes tomar cualquier bloque del HTML original y extraerlo para pegarlo en cualquier parte del cuerpo del DOM o en nuevas vistas, con total confianza de que la UI no colapsará. 

**Ejemplo de reciclaje de Interfaz:**
Para invocar un llamado a la acción estandarizado, sitúa el siguiente código de BEM en cualquier formulario o bloque comercial:

```html
<button class="btn btn--primary">
    Contratar Servicios
</button>

<!-- o su versión Outline con variante Hover -->
<button class="btn btn--outline-fuchsia">
    Agendar Demo
</button>
```

Otro clásico es clonar una "Tarjeta Flotante de Módulo". Si requieres un bloque interactivo con un número fantasma (`.service-card__bg-num`) y revelado al colocar el puntero, pega esto bajo un simple `.container`:

```html
<div class="service-card">
    <span class="service-card__bg-num">01</span>
    <h3 class="service-card__title">Título Inicial</h3>
    <div class="service-card__overlay">
        <h4 class="service-card__overlay-title">Nombre del Feature</h4>
        <p class="service-card__overlay-desc">Breve descripción extendida de este valor agregado sin que rompa las proporciones en vistas celulares.</p>
    </div>
</div>
```

## ⚡ Scripts y Nuevos Módulos JS

Todo el flujo de interacciones se enruta fluidamente desde un único archivo mediante módulos nativos ES6+ (`<script type="module" src="js/main.js" defer></script>`).

Para la creación o abstracción de una nueva funcionalidad interactiva:

1. Crea un archivo en formato módulo dentro de `js/modules/` (ej. `modal.js`).
2. Exporta una función de inicialización aislada:
   ```javascript
   // js/modules/modal.js
   export function initModals() {
       const modals = document.querySelectorAll('.js-modal');
       modals.forEach(m => {
           // Lógica autónoma aplicable a instancias infinitas...
       });
   }
   ```
3. Impórtalo globalmente dentro del orquestador unificador `js/main.js`:
   ```javascript
   // js/main.js
   import { initModals } from './modules/modal.js';
   
   document.addEventListener('DOMContentLoaded', () => {
       initModals();
   });
   ```

> 🛑 **Regla de ORO JS (Tech Lead Notice)**: Debes asegurarte obligatoriamente de consultar los controladores DOM de JS apoyado de clases exclusivas con el prefijo técnico **`js-`** (tales como `js-modal` o `js-carousel-btn`) y separarlo completamente de toda invocación asociada a los selectores estéticos (`btn`, `card`). El flujo de trabajo del diseñador no debe afectar al programador en esta arquitectura limpia.
