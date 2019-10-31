//Récupérer dans le DOM les span du compteur
let $mCnt = document.getElementById('mCnt');
let $secCnt = document.getElementById('secCnt');
let $mSecCnt = document.getElementById('mSecCnt');

//crée le compteur des minutes qui démarre à 0
let mCnt = 0;
//crée le compteur des secondes qui démarre à 0
let secCnt = 0;
//crée le compteur des millisecondes qui démarre à 0
let mSecCnt = 0;
let counting;

//Mise à jour des minutes dans le DOM
function uploadDom() {
    if (mCnt < 10) {
        $mCnt.innerText = '0' + mCnt;
    }
    else {
        $mCnt.innerText = mCnt;
    }
    if (secCnt < 10) {
        $secCnt.innerText = '0' + secCnt;
    }
    else {
        $secCnt.innerText = secCnt;
    }
    if (mSecCnt < 10) {
        $mSecCnt.innerText = '0' + mSecCnt;
    }
    else {
        $mSecCnt.innerText = mSecCnt;
    }
}
function counter() {
    //quand les secondes arrivent à 59, on ajoute 1 minute, mise à jour du DOM
    if(mSecCnt === 59){
        mSecCnt = 0;
        if (secCnt === 59) {
            secCnt = 0;
            ++mCnt;
        } else {
            //Ajout d'une seconde à chaque tour + Mise à jour du DOM
            ++secCnt;
        }
    } else {
        ++mSecCnt;
    }
    uploadDom();
}
//on écoute le click sur le bouton start : apelle la fonction counter, toutes les secondes
document.getElementById('start').addEventListener('click', function () {
    clearInterval(counting);
    counting = setInterval(counter, 16);
});
//on écoute le click sur le bouton pause : mettre en pause les intervalles
document.getElementById('pause').addEventListener('click', function () {
    clearInterval(counting);
});
//on écoute le click sur le bouton restart : mettre en pause les intervalles, reinitialiser les conteur, mettre à jour le DOM et relangcer les intervalles
document.getElementById('restart').addEventListener('click', function () {
    clearInterval(counting);
    mSecCnt = 0;
    secCnt = 0;
    mCnt = 0;
    uploadDom();
    document.getElementById('chronoList').innerHTML = '';
});
//on écoute le click sur le bouton save : ajouter un nouveau li qui contient le temps
document.getElementById('saveTour').addEventListener('click', function () {
    let newTour = document.createElement('li');
    newTour.classList.add('collection-item');
    newTour.innerHTML = document.getElementById('counter').innerHTML;
    document.getElementById('chronoList').prepend(newTour);
});