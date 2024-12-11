# Documentación del Proyecto: Portfolio Personal

Este documento describe la estructura y funcionalidades de la página web personal de José Antonio García Pascual.

---

## Índice

1. [Introducción](#introducción)  
2. [Estructura del Proyecto](#estructura-del-proyecto)  
   - [Estructura de Carpetas](#estructura-de-carpetas)  
   - [Archivos Principales](#archivos-principales)  
   - [Recursos Estáticos](#recursos-estáticos)  
3. [Librerías y Recursos Externos](#librerías-y-recursos-externos)  
   - [FontAwesome](#fontawesome)  
   - [AOS (Animate On Scroll)](#aos-animate-on-scroll)  
   - [GSAP (GreenSock Animation Platform)](#gsap-greensock-animation-platform)  
4. [Descripción de las Secciones](#descripción-de-las-secciones)  
5. [Scripts Personalizados](#scripts-personalizados)  
6. [Estilos](#estilos)  
7. [Futuras Mejoras](#futuras-mejoras)  

---

## Introducción

Este proyecto es un portfolio personal que resalta la experiencia laboral, habilidades técnicas, proyectos realizados y la información de contacto de José Antonio García Pascual. Incluye funcionalidades modernas como un tema oscuro/claro y animaciones avanzadas para mejorar la experiencia del usuario.

---

## Estructura del Proyecto

### Estructura de Carpetas

```plaintext
my-project/
├── docs/
│   ├── assets/
│   │   ├── main-SGmfb....png
│   │   ├── portalayunt-B....png
│   │   └── videogame--....png
│   └── index.html
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── portalayunt.png
│   │   └── videogame.png
│   └── styles/
│       ├── _contacto.scss
│       ├── _experiencia.scss
│       ├── _footer.scss
│       ├── _global.scss
│       ├── _habilidades.scss
│       ├── _header.scss
│       ├── _layout.scss
│       ├── _mixin.scss
│       ├── _presentacion.scss
│       ├── _proyectos.scss
│       ├── _sobremi.scss
│       ├── _variables.scss
│       └── main.scss
├── index.html
├── main.js
├── .gitignore
├── package.json
├── package-lock.json
├── readme.md
└── vite.config.js
Archivos Principales
docs/index.html: Archivo HTML principal que contiene toda la estructura de la página publicada.
src/styles/main.scss: Archivo de estilos que define el diseño de la página (requiere preprocesado a CSS).
src/main.js: Archivo JavaScript principal con funcionalidades personalizadas.
Recursos Estáticos
assets/portalayunt.png: Imagen del proyecto "Portal Ayuntamiento de Noez".
assets/videogame.png: Imagen del proyecto "Video Games Library Web App".
Librerías y Recursos Externos
FontAwesome
CDN: FontAwesome v5.12.1
Uso: Proporciona íconos usados en la navegación y las secciones del sitio.
AOS (Animate On Scroll)
CDN: AOS v2.3.4
Configuración:
javascript
Copiar código
AOS.init({ 
    duration: 1200, 
    once: true 
});
Uso: Aplicar efectos de entrada en elementos al desplazarse por la página.
GSAP (GreenSock Animation Platform)
CDN: GSAP v3.11.1
Configuración:
javascript
Copiar código
gsap.from("#bienvenida h1", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
});
Uso: Animaciones avanzadas al cargar el contenido.
Copiar código





Tú dijiste:
VALE PERO HAZ TODO EN MARKDOWN JODER
ChatGPT Plus
ChatGPT
Mis disculpas por la confusión anterior. Aquí está la documentación completa en Markdown:

markdown
Copiar código
# Documentación del Proyecto: Portfolio Personal

Este documento describe la estructura y funcionalidades de la página web personal de José Antonio García Pascual.

---

## Índice

1. [Introducción](#introducción)  
2. [Estructura del Proyecto](#estructura-del-proyecto)  
   - [Estructura de Carpetas](#estructura-de-carpetas)  
   - [Archivos Principales](#archivos-principales)  
   - [Recursos Estáticos](#recursos-estáticos)  
3. [Librerías y Recursos Externos](#librerías-y-recursos-externos)  
   - [FontAwesome](#fontawesome)  
   - [AOS (Animate On Scroll)](#aos-animate-on-scroll)  
   - [GSAP (GreenSock Animation Platform)](#gsap-greensock-animation-platform)  
4. [Descripción de las Secciones](#descripción-de-las-secciones)  
5. [Scripts Personalizados](#scripts-personalizados)  
6. [Estilos](#estilos)  
7. [Futuras Mejoras](#futuras-mejoras)  

---

## Introducción

Este proyecto es un portfolio personal que resalta la experiencia laboral, habilidades técnicas, proyectos realizados y la información de contacto de José Antonio García Pascual. Incluye funcionalidades modernas como un tema oscuro/claro y animaciones avanzadas para mejorar la experiencia del usuario.

---

## Estructura del Proyecto

### Estructura de Carpetas

```plaintext
my-project/
├── docs/
│   ├── assets/
│   │   ├── main-SGmfb....png
│   │   ├── portalayunt-B....png
│   │   └── videogame--....png
│   └── index.html
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── portalayunt.png
│   │   └── videogame.png
│   └── styles/
│       ├── _contacto.scss
│       ├── _experiencia.scss
│       ├── _footer.scss
│       ├── _global.scss
│       ├── _habilidades.scss
│       ├── _header.scss
│       ├── _layout.scss
│       ├── _mixin.scss
│       ├── _presentacion.scss
│       ├── _proyectos.scss
│       ├── _sobremi.scss
│       ├── _variables.scss
│       └── main.scss
├── index.html
├── main.js
├── .gitignore
├── package.json
├── package-lock.json
├── readme.md
└── vite.config.js
Archivos Principales
docs/index.html: Archivo HTML principal que contiene toda la estructura de la página publicada.
src/styles/main.scss: Archivo de estilos que define el diseño de la página (requiere preprocesado a CSS).
src/main.js: Archivo JavaScript principal con funcionalidades personalizadas.
Recursos Estáticos
assets/portalayunt.png: Imagen del proyecto "Portal Ayuntamiento de Noez".
assets/videogame.png: Imagen del proyecto "Video Games Library Web App".
Librerías y Recursos Externos
FontAwesome
CDN: FontAwesome v5.12.1
Uso: Proporciona íconos usados en la navegación y las secciones del sitio.
AOS (Animate On Scroll)
CDN: AOS v2.3.4
Configuración:
javascript
Copiar código
AOS.init({ 
    duration: 1200, 
    once: true 
});
Uso: Aplicar efectos de entrada en elementos al desplazarse por la página.
GSAP (GreenSock Animation Platform)
CDN: GSAP v3.11.1
Configuración:
javascript
Copiar código
gsap.from("#bienvenida h1", {
    x: -200,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
});
Uso: Animaciones avanzadas al cargar el contenido.
Descripción de las Secciones
Header
Contiene el menú de navegación con enlaces a las secciones principales.
Botón de modo oscuro/claro: Permite alternar entre los modos de tema.
Sección "Bienvenida"
Presentación del autor.
Botones de acción para contactar y visitar LinkedIn.
Animaciones configuradas con AOS y GSAP.
Sección "Experiencia Laboral"
Detalla experiencia previa como socorrista.
Usa animaciones AOS para el contenido y los textos.
Sección "Habilidades Técnicas"
Lista de habilidades organizadas.
Cada elemento tiene animaciones configuradas con AOS.
Sección "Proyectos"
Destaca dos proyectos:
Portal Ayuntamiento de Noez.
Video Games Library Web App.
Usa Vanilla Tilt para el efecto de inclinación en las imágenes.
Sección "Sobre Mí"
Describe los intereses y metas del autor.
Usa texto resaltado para palabras clave.
Sección "Contacto"
Proporciona información de contacto: teléfono, correo y dirección.
Enlace de correo directo usando mailto.
Footer
Contiene el copyright del autor.
Scripts Personalizados
Alternar Tema (Modo Oscuro/Claro)
Funcionalidad: Permite cambiar entre los modos oscuro y claro.

Persistencia: Guarda la preferencia del usuario en localStorage.

javascript
Copiar código
const savedTheme = localStorage.getItem('theme') || 'dark-mode';
body.classList.add(savedTheme);
Animaciones de Carga
Configuradas con GSAP.

javascript
Copiar código
gsap.from("#bienvenida p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power4.out",
});
Estilos
Archivo: src/styles/main.scss
Preprocesador: Sass.
Estilos organizados en variables y módulos reutilizables.
Futuras Mejoras
Agregar una sección para testimonios o recomendaciones.
Mejorar la accesibilidad (uso de etiquetas ARIA).
Optimizar el rendimiento mediante la minificación de CSS y JavaScript.
Implementar pruebas responsivas para dispositivos adicionales.