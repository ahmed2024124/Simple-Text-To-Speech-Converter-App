let typeInput = document.querySelector('.typeInput');
let btnSpeesh = document.querySelector('.btnSpeesh');

btnSpeesh.addEventListener('click', function(e) {
    let door = new SpeechSynthesisUtterance(typeInput.value);
    speechSynthesis.speak(door);
})