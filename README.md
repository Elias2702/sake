# Sake



# Consignes : https://github.com/becodeorg/LIE-Hamilton-1.7/tree/master/02-La-colline/02-NodeJS/04a-mastermind

# Node.JS: Mastermind

> A game of Mastermind, with server communication using sockets

* * *

## Introduction

Vous connaissez probablement le [Mastermind](https://fr.wikipedia.org/wiki/Mastermind), un jeu de société populaire dans les années '80 où un joueur choisissait une combinaison de couleurs que son adversaire devait deviner en 10 tentatives maximum.

Nous allons ensemble développer notre version du mastermind, en _temps réel_, et en multijoueurs.

Le back-end sera en charge de gérer le jeu et les joueurs. Nous utiliserons pour ça Node.JS et une technologie appelée **WebSockets** ; le front-end sera en charge d'afficher l'interface du jeu et de la maintenir à jour en fonction des messages reçus par le serveur, et lui transmettre en retour les actions des joueurs.

## Cahier des charges

### Règles du jeu

Le jeu se joue de 1 à 4 joueurs, chacun sur son propre écran.  
Lorsqu'une partie n'est pas en cours, le premier joueur sur le serveur peut choisir le nombre de joueurs à attendre.  
Une fois que le bon nombre de joueurs sont connectés (et ont choisi leurs pseudos), la partie commence.

L'ordinateur va choisir une combinaison de couleurs. Selon le nombre de joueurs, les paramètres changent :

| Nombre de joueurs | Taille de la combinaison | Couleurs disponibles | Tentatives maximum |
|:-----:|:-----:|:----- |:-----:|
| 1 | 4 | 6 : jaune, bleu, rouge, vert, blanc, noir | 10 |
| 2 | 5 | 6 : jaune, bleu, rouge, vert, blanc, noir | 10 |
| 3 | 6 | 8 : jaune, bleu, rouge, vert, blanc, noir, violet, rose | 10 |
| 4 | 6 | 8 : jaune, bleu, rouge, vert, blanc, noir, violet, rose | 8 |

Une fois la combinaison (secrètement) choisie par le serveur, la partie commence.

#### Tours de jeu

Le serveur gère les tours de jeu qui se composent de deux phases chacuns : une phase de réflexion (30s) et une phase de résultats (5s).

##### Phase réflexion

Pendant la phase de réflexion, chaque joueur essaie de deviner la combinaison en soumettant au serveur une proposition. Seule la proposition la plus rapide est prise en compte par le serveur. Au terme des trente secondes de réflexion, si aucun joueur n'a soumi de proposition, le tour se passe et une tentative est perdue.

##### Phase de résultats

Lorsqu'une proposition est reçue par le serveur, il va afficher le résultat : 

- soit la combinaison est la bonne, auquel cas le joueur qui l'a proposée **gagne la partie**
- soit la combinaison est incorrecte, mais il ne reste plus de tentative, auquel cas tous les joueurs ont **perdu la partie**
- soit la combinaison est incorrecte, et le serveur va donner aux joueurs des indices pour le prochain tour.

###### Affichage des indices

Les indices consistent, sur la proposition retenue, d'une indication concernant l'état de chaque position :

- **ok** (bonne couleur, bonne position)
- **partiel** (bonne couleur, mauvaise position)
- **faux** (mauvaise couleur et/ou mauvaise position)

#### Fin de partie

Que la partie se termine par la victoire d'un joueur ou une défaite collective, l'écran affiche le résultat puis propose de recommencer une partie avec les mêmes joueurs.

#### Emoji/réactions

Chaque joueur a sur son écran un sélecteur d'émojis (limitez-vous à cinq ou six possibilités), et une zone de l'écran affiche l'émoji courant de chaque joueur. À tout moment de la partie, un joueur peut changer son emoji, qui sera changé en direct chez les autres joueurs.

> 🖖 **BONUS:** vous pouvez essayer d'associer un son à chaque émoji.

### Contraintes techniques

Ce projet est *relativement* plus libre que le précédent sur vos choix techniques.

#### Mockups & Design

Nous ne vous avons pas prévu de design pour ce projet, ni de mockups.

N'oubliez pas que vous développez un **jeu**, ça doit être *fun* et *ludique*.  
Vous pouvez vous inspirer du [design du jeu original](https://www.google.com/search?q=mastermind+board+game&tbm=isch), ou vous inspirer de la pléthore de petits jeux mobile/web disponibles.

> 👋 **HEY!** le présent cahier des charges est un **minimum requis** : si vous voulez inclure d'autres fonctionnalités dans votre jeu, *tant que vous respectez les deadlines*, pas de souci.

#### Stack technique

La **stack technique** est elle aussi relativement libre.

##### Back-end

Hormis le fait que le serveur doit être codé en utilisant **Node.js**, et que les communications client/serveur doivent utiliser les **websockets**, vous êtes libres d'utiliser les techniques de votre choix pour arriver à ces fins.

> ☝️ **NOTE :** Les **websockets** sont *la* réelle nouveauté de ce projet. Si vous ne savez pas vers quelle librairie vous pencher, la plus connue est [socket.io](https://socket.io).

##### Front-end

**React**, **VueJS**, *rien* de spécial… pour le front, vous êtes libres de vos mouvements. Faites-vous plaisir, testez de nouvelles choses ou jouez la sécurité… à vous de voir.

#### Toolchain / Dev Env

Concernant votre environnement de développement, nous vous laissons libres de choisir ce qui vous convient le mieux.

> ⚠️ **ATTENTION :** libres ne veut pas dire "négligeant" ! Veillez à documenter votre environnement, pour votre groupe ainsi que pour nous, vos coaches.

##### Environnement

À votre guise. **Docker** (et *docker-compose*) semble toutefois être le meilleur choix ici.

##### Back-end

À vous de voir.

##### Front-end

Une fois encore, vous êtes libres de choisir.  
Si vous ne vous sentez pas l'âme de configurer webpack de zero, rappellez-vous qu'il existe des solutions comme [parcel](https://parceljs.org).

##### Prettier & ESLint

Un impératif de taille : nous **voulons** vous voir utiliser [Prettier](https://prettier.io) & [ESLint](https://eslint.org) sur le projet.

Nous vous laissons le choix et la manière pour les utiliser, mais la configuration de chacun des outils est imposée : [les fichiers de configuration se trouvent sur ce gist](https://gist.github.com/leny/e55a3e1ba32b639eabb7a03ffe81215a).

N'hésitez pas à reprendre le setup des projets précédents.

* * *

## Deadline & modalités

*TODO*

Bon travail.
