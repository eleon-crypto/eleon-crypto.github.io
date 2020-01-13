var div = document.querySelectorAll('#btn');

div.onclick = function() {
    div.innerHTML = 'Sended';
    div.style.color = 'green';
    div.style.backgroundColor = '#fff';
}