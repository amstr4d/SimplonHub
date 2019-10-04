#Créer un chronomètre qui peut enregistrer le chronomètre

1.Créer les fichiers :

-index.html

-script.js

Les relier entre eux.
Ajouter un framework Css

2.Dans index.html

Créer 4 boutons : start, pause, restart et enregistrer un tour avec des ids.

Afficher un compteur à 00 m :00 s :00 avec des span autour des minutes, des secondes et des millisecondes avec des id pour facilement les mettre à jour.

Ajouter un ul vide avec un id

3. Dans script.js
Récupérer dans le DOM les span du compteur

créer le compteur des minutes qui démarre à 0
créer le compteur des secondes qui démarre à 0
créer le compteur des millisecondes qui démarre à 0
Créer une variable `counting` qui représentera l'interval du timer

Créer une fonction `uploadDom()` qui met à jour les compteurs dans le DOM (minutes, secondes et millisecondes)

Créer la fonction `counter()` qui incrémente d'un milliseconde, qui ajoute 1 au compteur seconde quand les millisecondes arrivent à 59 et ajoute 1 au compteur minute quand les secondes arrivent à 59.
Cette fonction doit appeler la fonction `uploadDom()`.

Ajouter un event listener sur le bouton start qui lance clear l'interval `counting` et qui lance l'interval `counting` du compteur.

Ajouter un event Listener sur le bouton pause qui clear l'interval `counting`

Ajouter un event listener sur le bouton restart qui clear l'interval `counting`, remet les comteurs minute, seconde et millisecondes à 0, qui met à jour dans le DOM les compteurs et qui vide l'inner HTML de la liste ul

Ajouter un event listener sur le bouton enregistrer un tour qui crée un nouvel élément li, qui prend le même inner HTML que le compteur et qui ajoute cet élément au début de la liste ul.


Bonus
Ajouter les classes du framework Css pour pimper un peu ce chronomètre
Ajouter un bouton pour supprimer un par un les chrons enregistrés