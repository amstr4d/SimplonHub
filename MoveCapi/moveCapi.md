#Move Capy
Exercie pour déplacer dans le DOM une image avec les flèches du clavier.

1.Créer les fichiers du projet :

Dans un dossier créer :
- index.html
- style.css
- script.js

Les reliers.

2.Dans index.html :
Ajouter :
-un titre avec le nom du jeu
-un paragraphe qui explique comment jouer
-Créer une div avec un `id='capy-yard'`
-Créer une autre div dedans avec un `id="capy""`
-Mettre l'image de notre capy dedans !

3.Dans style.css :
Définir 
```css
#capy-yard {
    margin: 100px 0 0 0;
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#capy {
    height: 35%;
}
#capy img {
    height: 100%;
    width: auto;
}
```
Capy sera à l'aise pour bouger !

4.Dans script.js
Définir en global deux variables `moveX` et `moveY`;
Créer un event Listener sur le `keydown` sur la window.

Avec un switch, tester le `event.keyCode`
-37 est la flèche gauche
-39 est la flèche droite

Pour chacun de ces deux cas, diminuer ou augmenter moveX de 10.

-38 est la flèche haute
-40 est la flèche basse

Pour chacun de ces deux cas, diminuer ou augmenter moveY de 10.

Pour chacun des 4 cas ajouter en style inline :
```js
document.getElementById('capy').style.transform = `translate(${moveX}%,${moveY}%)`;
```

5.Tester le jeux !

6.Ajouter des limites à capy ! pour chaque cas, définir une condition qui limite moveX ou moveY pour que capy ne parte pas trop loin.

Bonus
Factoriser avec un fonction `moveCapy()` qui reprend le déplacement de capy dans chacun des cas.
Ajouter du css pour délimiter le champs de capy.