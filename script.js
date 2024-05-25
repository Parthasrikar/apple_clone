let hdrop = document.getElementsByClassName('hdrop');
let drop = document.getElementById('drop');
let rowing = document.getElementById('rowing');

function show() {
    drop.style.visibility = 'visible';
    hero1.style.backgroundColor = 'rgba(255,255,255,0.6)';

    rowing.style.filter = 'blur(10px)';

}

function hide() {
    drop.style.visibility = 'hidden';
    rowing.style.filter = 'none';
    hero1.style.backgroundColor = 'transparent';
}



