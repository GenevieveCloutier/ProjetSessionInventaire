# Liste des fonctionnalités

## Liste des utilisateurs
- Administrateur
- Utilisateur (employé)
- Chef d'équipe

## Fonctionnalités client 

Code | Nom | Description | Utilisateur(s) concerné(s) | Maquette(s) associée(s) | Niveau de priorité
:---: | --- | --- | --- | :---: | --- 
C1 | Création de compte | Afficher une page permettant de créer un nouveau compte | Utilisateur et Administrateur | N/A | 2 |
C2 | Page de connexion | Afficher une page de connexion à l'utilisateur | Utilisateur | N/A | 1 |
C3 | Catalogue | Afficher les outils disponibles pour la location. Afficher les outils même si ils sont tous loués, avec la date de retour prévu, mais il n'est pas possible de les louer | Utilisateur | N/A | 1 |
<mark>C4</mark> | Filtre du catalogue | Fonctionnalité de filtre pour afficher les outils par ~~catégorie ou par~~  nom <mark> ou mot clef</mark>| Utilisateur | N/A | 5
C5 | Formulaire d'ajout d'outil | Afficher une page (formulaire) permettant l'ajout de nouveaux outils | Administrateur | N/A | 1 |
C6 | Formulaire de modification/suppression d'un outil | Afficher un formulaire permettant de recueillir les modifications d'un outil ou permettre la "suppression" d'un outil (suppression non-définitive, simplement ne plus afficher un outil qui ne serait plus disponible) | Administrateur | N/A | 3 |
C7 | Page de location | Afficher une page permettant à l'utilisateur de louer un outil | Utilisateur | N/A | 1 |
C8 | Locations de l'utilisateur | Afficher toutes les locations faites par l'utilisateur (en cours et passées) | Utilisateur | N/A | 5
C9 | Modification d'une location | Page permettant la modification d'une location | Administrateur / Chef d'équipe | N/A | 3
C10 | Durée de location | Afficher un menu déroulant permettant de spécifier la durée de la location | Utilisateur | N/A | 5
C11 | Remise en stock | Page permettant de remettre un outil disponible lorsqu'il est rapporté | Administrateur / Chef d'équipe | N/A | 4
C12 | Récapitulatif des locations | Afficher tous les outils en cours de location et leur date de retour prévue | Administrateur / Chef d'équipe | N/A | 4 
C13 | Portail administrateur | Espace réservé aux administrateurs et chefs d'équipe pour permettre la gestion des fonctionnalités qui leurs sont réservées | Administrateur / Chef d'équipe | N/A |3
<mark>C14</mark> | Mot de passe oublié | Permet à l'utilisateur de réinitialiser son mot de passe. | Utilisateur | N/A | 3
<mark>C15</mark> | Profil utilisateur | Afficher le profil de l'utilisateur (afficher les locations, informations personnelles ) | Utilisateur | N/A |3
<mark>C17</mark> | Modification profil | Permettre à l'utilisateur de mettre à jour ses informations personnelles (Téléphone, mot de passe) | Utilisateur | N/A | 5
<mark>C18</mark> | Catégories | Filtrer les outils par catégories dans le menu déroulant de l'entête | Utilisateur | N/A | 5


## Fonctionnalités internes 
Code | Nom | Description | Utilisateur(s) concerné(s) | Maquette(s) associée(s) | Niveau de priorité
:---: | --- | --- | --- | :---: | --- 
I1 | Création de compte | Création d'un compte lors de la première connexion | Utilisateur et Administrateur | N/A | 2 |
I2 | Authentification et accès utilisateurs | Vérifier que l'utilisateur existe et que le mot de passe correspond | Utilisater / Administrateur | N/A | 1 |
I3 | Encryption des mots de passe | Hachage des mots de passe, ajout du salt et stockage dans la base de données | Utilisateuer / Administrateur | N/A | 2 |
I4 | Catalogue | Afficher tous les outils disponibles du catalogue | Utilisateur | N/A | 1 
I5 | Filtre des outils | Filtrer le catalogue des outils selon les catégories ou les noms | Utilisateur | N/A | 5 |
I6 | Ajout d'outils | Ajouter de nouveaux outils dans la base de données et leurs caractérisques (Statut, Description, Quantité disponible) | Administrateur / Chef d'équipe | N/A | 1 |
I7 | Modification, ou suppression d'un outil | Enregistrer les modifications d'un outil (ex. changer la quantité disponible en inventaire) ou empêcher l'affichage d'un outil s'il n'est plus disponible | Administrateur | N/A | 3 |
I8 | Inscription des locations | Insérer dans la base de données les informations concernant chaque location (Utilisateur, outil loué, durée de la location) | Utilisateur | N/A | 1
I9 | Courriel de confirmation de location / retour | Envoyer un courriel à l'utilisateur concerné lorsqu'un outil est loué ou rapporté | Utilisateur | N/A | 4
I10 | Retour de location | Remettre disponible dans la base de données les outils rapportés | Administrateur / Chef d'équipe | N/A | 1
I11 | Modification de location | Inscrire dans la base de données les modifications d'une location | Administrateur / Chef d'équipe | N/A | 3
I12 | Durée de location | Inscrire dans la base de donnée la durée prévue de la location d'un outil | Utilisateur | N/A | 4
I13 | Filtre des locations | Filtrer dans la base de données les locations pour un utilisateur (en cours et passées) | Utilisateur | N/A | 5
I14 | Amende | En cas de perte d'un outil ou si la durée de la location est dépassée, inscrire une amande dans la base de données et envoyer un courriel à l'utilisateur concerné avec le détail des informations (outil perdu, montant de l'amande) | Administrateur / Chef d'équipe | N/A | 5 |
I15 | Filtre des locations | Filtrer les données de la base de données pour afficher les outils en cours de location et la date de retour prévu | Administrateur / Chef d'équipe | N/A | 4
<mark>I14</mark> | Mot de passe oublié | Inscrire le nouveau dans la base de données à la place de l'ancier | Utilisateur | N/A | 3
<mark>I15</mark> | Profil utilisateur | Aller chercher dans la base de donnée les informations relatives à l'utilisateur | Utilisateur | N/A | 3
<mark>C16</mark> | Modification profil | Enregistrer les modifications du profil de l'utilisateur dans la base de données | Utilisateur | N/A | 5
<mark>I17</mark> | Catégories | Filtrer via la base de données les outils selon les catégories | Utilisateur | N/A |5
