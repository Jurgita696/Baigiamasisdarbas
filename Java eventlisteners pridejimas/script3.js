// Adding an event listener

const button = document.getElementById('click-me');
button.addEventListener('click', function() { 
    const message = document.getElementById('message');
message.textContent = 'Spausk dar kart!';
});