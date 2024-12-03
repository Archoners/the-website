// Initialize Particle.js
particlesJS.load('particles-js', null, function() {
    console.log('particles.js loaded - callback');
  });
  
  // Login Validation
  document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
  
      // For demonstration purposes, any input will be accepted
      let username = document.getElementById('username').value.trim();
      let password = document.getElementById('password').value.trim();
  
      if(username && password) {
          document.getElementById('login-screen').style.display = 'none';
          document.getElementById('profile-screen').style.display = 'flex';
      } else {
          alert('Access Denied: Invalid Credentials');
      }
  });
  
  // Navigate to Incident Report
  document.getElementById('incident-report-link').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('profile-screen').style.display = 'none';
      document.getElementById('incident-report-screen').style.display = 'flex';
  });
  
  // Logout Functionality
  document.getElementById('logout-link').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('incident-report-screen').style.display = 'none';
      document.getElementById('login-screen').style.display = 'flex';
  });
  
  // Particle.js Configuration (inline)
  particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 80
      },
      "color": {
        "value": "#00d4ff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.3
      },
      "size": {
        "value": 3.5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#00d4ff",
        "opacity": 0.25,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        },
        "onclick": {
            "enable": true,
            "mode": "push"
        }
      },
      "modes": {
        "repulse": {
            "distance": 100,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
  