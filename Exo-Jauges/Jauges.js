let vie= 100;
let ripley = 100;
// création des différentes jauges dans le html
function jauge(pvie,pfaim) {

    let elemParent = document.getElementById('jauges');
    let elemVie = document.createElement('div');
    elemVie.setAttribute('id', 'vie');
    elemVie.innerText = vie;
    elemParent.appendChild(elemVie);
    let elemFaim = document.createElement('div');
    elemFaim.setAttribute('id', 'faim');
    elemFaim.innerText = faim;
    elemParent.appendChild(elemFaim);
    console.log(elemParent);


}
// création de la décrémentation de la jauge vie
function jaugeVie() {
    let elemVie = document.getElementById('vie');
    let interval = window.setInterval(function () {
        if (vie > 0) {
            vie = vie - 5;
            elemVie.innerText = vie;
            var contenant2 = document.getElementById("contenant2");
            var contenu2 = document.getElementById("contenu2");




            contenu2.style.height = parseInt(vie / 100 * contenant2.clientHeight) + "px";
            var total = vie * pourcentage2 / 100;
            document.getElementById("pourcentage2").innerText = parseInt(vie) + "%";
        }



        else {
            vie= 0
            alert('Vous avez perdu !');
            clearInterval(interval);
        }

    }, 1000);



function jaugeFaim() {
    let elemFaim = document.getElementById('faim');
    let interval = window.setInterval(function () {
        if (faim > 0) {
            faim = faim - 10;

            elemFaim.innerText = faim;



            var contenant = document.getElementById("contenant");
            var contenu = document.getElementById("contenu");


            contenu.style.height = parseInt(faim / 100 * contenant.clientHeight) + "px";
            var total = faim * pourcentage / 100;
            document.getElementById("pourcentage").innerText = parseInt(faim) + "%";





        }
        else {
            faim = 0
            alert('Vous avez perdu !');
            clearInterval(interval);
        }

        
}, 1000);

   
}

}
