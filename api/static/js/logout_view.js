let timeout;

      function startTimer() {
          timeout = setTimeout(logoutUser, 30000); // 600000 ms = 10 minutos (cambia el tiempo según sea necesario)
      }
      
      function resetTimer() {
          clearTimeout(timeout);
          startTimer();
      }
      
      function logoutUser() {
          // Realiza una llamada a tu URL de cierre de sesión de Django
          window.location.href = '/logout'; // Cambia esto por tu URL de cierre de sesión
      }
      
      // Reinicia el temporizador en eventos de interacción (clics, movimientos del mouse, etc.)
      document.addEventListener('mousemove', resetTimer);
      document.addEventListener('mousedown', resetTimer);
      document.addEventListener('keypress', resetTimer);
      
      // Inicia el temporizador cuando se carga la página
      document.addEventListener('DOMContentLoaded', startTimer);