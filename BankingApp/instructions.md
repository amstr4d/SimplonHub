# Banking App

L'objectif est de creer une mini appli de suivi de budget (compta). On va pouvoir ajouter des opérations avec une date (débit / crédit) et faire des totaux

1. La base de données
    - Creer une base de données vierge
    - Ajouter une table dans cette base, qui va contenir les opérations : 
        Operation(__id__, title, amount, created_at)
2. Ajouter des opérations
    - Creer un fichier `newOperationView.php` et un fichier `newOperationController.php`
    - Dans le fichier `newOperationView.php`, creer le formulaire HTML pour ajouter une opération : 
        - Champs : Titre, montant et date
        - La cible est `newOperationController.php`
    - Dans le fichier `newOperationController.php`, faire en sorte que les informations soient enregistré
        - Initialiser la connexion à la BDD avec PDO
        - Récuperer toutes les informations du formulaire dans le tableau `$_POST`
        - Préparer la requete pour insérer une nouvelle ligne dans la table 'Operation'
        - Remplir cette requete avec les informations récuperer du formulaire
        - Executer la requete
        - Après l'execution de la requete, rediriger vers la page `operationsListView.php`
3. Lister toutes les opérations
    - Creer un fichier `operationsListView.php`
    - Dans ce fichier, il faudra afficher la liste de toutes les opérations : 
        - Initialiser la connexion à la BDD avec PDO
        - Préparer la requete pour selectionner les lignes de la table 'Operation'. On veut afficher les 50 opérations du mois en cours.
        - Executer la requete
        - Afficher les resultats de la requete sous forme d'une liste

Bonus : 
    - Faire un affichage qui permet de facilement distinguer les crédits (+) des débits (-)
    - Creer des filtres pour afficher que les débits ou que les crédits ($_GET)
    - Creer des filtres pour afficher les autres dates (mois et années)
    - Réduire la limite de l'affichage des opérations à 20 mais faire une pagination ($_GET)
