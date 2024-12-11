document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('modo'); // Enlace para alternar tema
    const body = document.body;
    const icon = themeToggle.querySelector('i'); // Icono dentro del enlace
  
    // Verificar si hay un tema guardado
    const savedTheme = localStorage.getItem('theme') || 'dark-mode'; // Predeterminado: dark-mode
    body.classList.add(savedTheme); // Añadir la clase guardada al body
    updateIcon(savedTheme, icon); // Actualizar el icono basado en el tema
  
    // Alternar tema cuando se hace clic
    themeToggle.addEventListener('click', (e) => {
      e.preventDefault(); // Evitar la acción predeterminada del enlace
  
      // Cambiar entre los modos
      if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        updateIcon('dark-mode', icon);
      } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
        updateIcon('light-mode', icon);
      }
    });
  
    // Función para actualizar el icono
    function updateIcon(theme, icon) {
      if (theme === 'light-mode') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
      }
    }
  });
  