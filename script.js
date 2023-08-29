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