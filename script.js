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

$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var videoOffset = $('#background-video').offset().top;
        var videoHeight = $('#background-video').height();

        // Calculez le pourcentage de visibilité de la vidéo
        var visibilityPercentage = 1 - (videoOffset - scrollTop) / videoHeight;
        visibilityPercentage = Math.min(1, Math.max(0, visibilityPercentage)); // Assurez-vous qu'il reste entre 0 et 1

        // Convertissez le pourcentage de visibilité en opacité et en filtre de luminosité
        var opacity = visibilityPercentage;
        var brightness = 1- visibilityPercentage;

        $('#background-video').css({
            'opacity': opacity,
            'filter': 'brightness(' + brightness + ')'
        });
    });
});
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('hidden');
    });
});