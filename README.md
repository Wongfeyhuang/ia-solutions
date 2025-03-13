# AI Solutions - Site Web Professionnel

Ce projet est un site web professionnel pour présenter vos services en intelligence artificielle et maintenance informatique.

## Structure du site

Le site est composé des sections suivantes :
- Accueil (bannière principale)
- Profil
- Services
- Compétences
- Expériences & Projets
- Objectif
- Contact

## Technologies utilisées

- HTML5
- CSS3
- JavaScript (vanilla)
- Font Awesome pour les icônes

## Comment personnaliser le site

### Images

Vous devez ajouter vos propres images dans le dossier `images`. Les images nécessaires sont :
- `hero-image.png` : Image principale pour la bannière d'accueil (dimensions recommandées : 1200x800px)
- `profile-image.jpg` : Votre photo de profil (dimensions recommandées : 400x400px, format carré)

**Important** : Assurez-vous que vos images sont optimisées pour le web :
1. Redimensionnez-les aux dimensions appropriées
2. Compressez-les pour réduire leur taille (utilisez des outils comme TinyPNG ou Squoosh)
3. Visez une taille de fichier inférieure à 500 Ko pour les grandes images et 100 Ko pour les petites images
4. Si vous rencontrez des problèmes d'affichage, essayez d'utiliser des placeholders temporaires pour tester le site

### Informations personnelles

Vous pouvez modifier les informations suivantes dans le fichier `index.html` :
- Nom et coordonnées dans la section Contact
- Liens vers vos réseaux sociaux dans le footer
- Textes descriptifs de vos services et compétences

### Couleurs et style

Les couleurs principales du site sont définies dans le fichier `style.css` dans les variables CSS :
```css
:root {
    --primary-color: #76b900; /* Couleur principale (vert) */
    --secondary-color: #1a1a1a; /* Couleur secondaire (noir) */
    --text-color: #333; /* Couleur du texte */
    --light-bg: #f5f5f5; /* Couleur de fond claire */
    --dark-bg: #222; /* Couleur de fond foncée */
}
```

Vous pouvez modifier ces valeurs pour changer le thème de couleur du site.

## Résolution des problèmes courants

### Le site ne s'affiche pas correctement

1. Vérifiez que tous les fichiers (HTML, CSS, JavaScript) sont dans le même dossier
2. Assurez-vous que les images sont dans le dossier `images` et que leurs noms correspondent à ceux utilisés dans le code HTML
3. Si les images sont trop volumineuses, elles peuvent ralentir le chargement du site. Optimisez-les comme indiqué ci-dessus
4. Ouvrez la console de développement de votre navigateur (F12) pour voir s'il y a des erreurs

### Les images ne s'affichent pas

1. Vérifiez que les extensions des fichiers dans le dossier `images` correspondent à celles utilisées dans le code HTML (.png, .jpg, etc.)
2. Assurez-vous que les chemins vers les images sont corrects
3. Si les images sont trop volumineuses, essayez de les optimiser

## Fonctionnalités

- Design responsive (s'adapte aux mobiles, tablettes et ordinateurs)
- Navigation fluide avec défilement doux
- Animations au défilement
- Formulaire de contact (à connecter à un backend pour le rendre fonctionnel)
- Menu mobile pour les petits écrans

## Comment déployer le site

1. Téléchargez tous les fichiers sur votre serveur web
2. Assurez-vous que les images sont placées dans le dossier `images`
3. Personnalisez le contenu selon vos besoins
4. Pour rendre le formulaire de contact fonctionnel, vous devrez ajouter un script backend (PHP, Node.js, etc.)

## Crédits

- Icônes : [Font Awesome](https://fontawesome.com/)
- Polices : Segoe UI, Tahoma, Geneva, Verdana, sans-serif 