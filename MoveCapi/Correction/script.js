let moveX = 0;
let moveY = 0;
function moveCapy(){
    document.getElementById('capy').style.transform = `translate(${moveX}%,${moveY}%)`;
}
window.addEventListener('keydown', function(event){
    switch (event.keyCode) {
        case 37:
            if (moveX >= -400) {
                moveX = moveX - 10;
                moveCapy();
            }
            break;
        case 39:
            if (moveX <= 400){
                moveX = moveX + 10;
                moveCapy();
            }
            break;
        case 38:
            if (moveY >= -400){
                moveY = moveY - 10;
                moveCapy();
            }
            break;
        case 40:
            if (moveY <= 400){
                moveY = moveY  + 10;
                moveCapy();
            }
            break;
    }
});