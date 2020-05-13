var c = 0;
document.onmousedown = click 
async function click(event) { 
    if (event.button == 0) { 
        c++; 
        update();
    }
    if (event.button == 2) {
        c--;
        update();
    } 
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode === 13) {
        c = prompt("Set counter", "");
        update();
    }
}) 

function update() {
    document.getElementById('ct').innerHTML = String(c)
}