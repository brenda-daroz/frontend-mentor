const accordion = document.querySelectorAll('.text__question')
const answer = document.querySelector('.text__answer')

for (let index = 0; index < accordion.length; index++) {
    const element = accordion[index];
    element.addEventListener('click', function () {
        console.log('ola')

        element.nextElementSibling.classList.toggle('hidden');
        element.classList.toggle('active')



    })
}
