// ciblage bouton ajouter
let btnadd = $('#addbtn');
//ciblage <p> </p> vide
let ajout = $('#ajout');
//création d'un tableau
let tablist = [];

// évènement sur le click du bouton ajouter
btnadd.on('click', function (event) {
    event.preventDefault();
    //je récupère la valeur texte tapée dans le textarea
    let textajout = $("#ajouttext").val();
    console.log(textajout);
    //je crée une condition pour que js vide le tableau précédent et remplace par les éléments nouveaux ajoutés (pour qu'il ne répète pas le tableau ,on vide le <p> avant avec .empty)
    if (textajout !== '') {

        ajout.empty();
        tablist.push(`${textajout}`);
        $('#ajouttext').val()



    }
    //je crée une fonction que je vais pouvoir rappeler après afin de faire fonctionner les boutons close
    function bloup() {
        //je crée une boucle qui va permettre d'injecter les ajouts dans le html
        for (const [i, list] of tablist.entries()) {
            let bla = list;

            let tpl = `  <div class="input-group-text">
        <input id="moninput" type="checkbox" checked>
        <label for="">${bla}</label>
        <button class="close" id="supprimer"> X<span class="close"></span></button>
    </div> `;
            //je crée la li dans laquelle le template va s'effectuer
            let ajouter = $('<li/>', {
                html: tpl
            });
            ajout.append(ajouter);
            console.log(ajouter);
            //je cible mon bouton close et l'endroit dans lequel apparait l'élément à supprimer (le li)
            let closebtns = $('.close', ajouter);
            // évènement sur le bouton close avec splice qui permet de supprimer un élément d'un tableau
            closebtns.on('click', function (event) {
                // i = l'endroit ou débute le tableau , 1 pour effectuer l'évènement une fois à partir de cet endroit
                tablist.splice(i, 1);
                ajout.empty();
                bloup();
            })

        }
    }
    //rappel de la fonction pour qu'elle s'exécute
    bloup()
})

