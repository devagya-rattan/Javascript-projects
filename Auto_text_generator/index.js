const textel = document.getElementById("text");
const speedel = document.getElementById("speed");
const text = 'We love programming!';
let idx = 0;
let speed = 300 / speedel.value;

writeText();

function writeText() {
    textel.innerText = text.slice(0, idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedel.addEventListener('input', (e) => (speed = 300/e.target.value));
