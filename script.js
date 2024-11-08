document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.gallery-btn');
    const displayedImage = document.getElementById('displayedImage');

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            buttons.forEach(btn => btn.classList.remove('active'));


            button.classList.add('active');


            displayedImage.src = button.dataset.image;
        });
    });
});