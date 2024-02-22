$(document).ready(function() {
    $(window).scroll(function() {
        $('.animated-from-right').each(function() {
            var top_of_element = $(this).offset().top;
            var bottom_of_element = top_of_element + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();

            if (bottom_of_screen > top_of_element) {
                $(this).addClass('animate');
            }
        });
    });
});


const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const allAnswers = document.querySelectorAll('.answer');
        
        allAnswers.forEach(a => {
            if (a !== answer) {
                a.classList.add('hidden');
            }
        });
        
        answer.classList.toggle('hidden');
    });
});

const video = document.getElementById('myVideo'); // Récupérer l'élément vidéo
    video.playbackRate = 1.2; // Modifier la vitesse de lecture (1.0 = vitesse normale)

    
  //COOKIES
  // Vérifie si le cookie d'acceptation existe
  function checkCookie() {
    var accepted = getCookie("cookiesAccepted");
    if (accepted) {
      // Si le cookie existe, masquer la boîte de dialogue
      document.querySelector('.container').style.display = 'none';
    }
  }

  // Fonction pour récupérer un cookie par son nom
  function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  // Fonction pour définir un cookie avec une durée d'expiration
  function setCookie(name, value, days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  // Vérifier si le cookie d'acceptation existe lors du chargement de la page
  window.onload = checkCookie;
  // Sélectionnez le bouton "close"
  var closeButton = document.querySelector('.close');

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton "close"
  closeButton.addEventListener('click', function() {
    // Sélectionnez le conteneur parent
    var container = document.querySelector('.container');
    // Masquez le conteneur parent
    container.style.display = 'none';
  });

  // Sélectionnez le bouton "accept"
  var acceptButton = document.querySelector('.accept');

  // Ajoutez un gestionnaire d'événements pour le clic sur le bouton "accept"
  acceptButton.addEventListener('click', function() {
    // Définir le cookie d'acceptation pour une durée de 30 jours
    setCookie("cookiesAccepted", "true", 30);
    // Masquer la boîte de dialogue
    document.querySelector('.container').style.display = 'none';
  });


