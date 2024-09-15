# Fisheye

L'ENJEU :

    * Créez un site accessible pour une plateforme de photographes.
    * il faut pouvoir mette en valeur leurs produits tout en facilitant le contact entre eux et le potentiels client.


LES  FONCTIONNALITES :

----------------------------------------------------------------
Gestion des progils et innformations avec des Classes (scripts/pages et scripts/templates)
________________________________________________________________

    * Consulter les profiles des photographes 

        -> Afficher Nom, Localité, description, prix et Photo
        -> Trier leur travail par popularité (nombre de Likes), Date (ordre 
           croissant) ou Titre (ordre alphabetque)
        -> Aperçu du Travail en clickant dessus 
            - Posssibilité de naviguer entre les travaux.
----------------------------------------------------------------
Les Codes se trouves dans les scripts/utils
________________________________________________________________
    * Contacter les photographes

        -> Afficher un formulaire en popup quand on clique sur le boutton
            - Le formulaire comprend: Prenom, nom, email, message et bouton "Envoyer"

    * Liker ou pas leurs travaux (mettre un coeur ou pas)
        -> Les coeurs sont présent dans la descriptoion de l'image et clickable.
           Ce qui génère un Incrément du nombre de like pour cette image.
        -> En dessous se trouve un autre coeur avec le nombre total des likes (tous 
           projets confondus). Ce dernier aussi est mis à jour à chaque incrément.
        -> On ne peut pas liker 50 fois le même projet. 