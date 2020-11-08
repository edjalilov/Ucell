$(document).ready(function () {

  let authPanel = $('.form-panel.reg');
  let regPanel = $('.form-panel.reg')[0].scrollHeight;

  $('.form-panel.reg').not('.form-panel.reg.active').on('click', () => {
    $('.form-toggle').addClass('visible');
    $('.form-panel.auth').addClass('hidden');
    $('.form-panel.reg').addClass('active');
    $('.header-form').animate({
      'height': regPanel
    }, 200);

    $('.form-toggle').on('click', function () {
      $(this).removeClass('visible');
      $('.form-panel.auth').removeClass('hidden');
      $('.form-panel.reg').removeClass('active');
      $('.header-form').animate({
        'height': authPanel
      }, 200);
    });

  });

  let show = document.querySelector('.show');
  let pass = document.querySelector('.pass');
  let openEye = document.querySelector('.show .fa-eye');
  let closeEye = document.querySelector('.show .fa-eye-slash');

  show.addEventListener('click', function (event) {
    event.preventDefault();
    if (pass.type == 'password') {
      pass.type = 'text';
      closeEye.style.display = 'none';
      openEye.style.display = 'block';

    } else {
      pass.type = 'password';
      closeEye.style.display = 'block';
      openEye.style.display = 'none';
    }
  });


  $('#form-auth').submit(function (e) {
    $('.form-group__auth').each(function () {
      if ($(this).val() == '') {
        $(this).addClass('error-border');
        e.preventDefault();
      }
    });
  });

  $('#form-reg').submit(function (e) {
    $('.form-group__reg').each(function () {
      if ($(this).val() == '') {
        $(this).addClass('error-border');
        e.preventDefault();
      }
    });
  });

  $('.form-group__input').on('input', function () {
    $(this).removeClass('error-border');
  });

  $('#form-auth').validate({
    rules: {
      username: {
        required: true,
      },
      password: {
        required: true,
      }
    },
    messages: {
      username: {
        required: "Username field is required"
      },
      password: {
        required: "Password field is required"
      }
    }
  });

  $('#form-reg').validate({
    rules: {
      usernameReg: {
        required: true,
        minlength: 4
      },
      passwordReg: "required",
      required: true,
      minlength: 4,
      passwordConfirm: {
        equalTo: "#passwordReg",
        required: true
      },
      email: {
        required: true,
        email: true,
      },
    },
    messages: {
      usernameReg: {
        required: "Username field is required"
      },
      passwordReg: {
        required: "Password field is required"
      },
      email: {
        required: "Email field is required"
      }
    }
  });


  const particlesSettings = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#642887"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#642887",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
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
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  };

  particlesJS('particles', particlesSettings);


});