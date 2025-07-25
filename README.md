# Albion API

API REST pour récupérer les informations des objets du jeu Albion Online avec leurs prix en temps réel.

## Description

Cette API permet de consulter la base de données des objets d'Albion Online et de récupérer leurs prix actuels sur les différents marchés du jeu. Elle fournit des endpoints pour rechercher des objets par ID, par nom unique, ou lister tous les objets disponibles.

### Fonctionnalités principales

- **Consultation d'objets** : Récupération des informations détaillées des objets (noms localisés, descriptions, etc.)
- **Prix en temps réel** : Intégration avec l'API "Albion Data Project" pour obtenir les prix actuels
- **Recherche flexible** : Recherche par ID MongoDB ou par nom unique d'objet

## Architecture

Le projet suit une architecture MVC classique avec :

- **Models** : Schémas MongoDB pour les objets
- **Controllers** : Logique de traitement des requêtes
- **Services** : Logique métier et intégration API externe
- **Repositories** : Couche d'accès aux données
- **Routes** : Définition des endpoints API

## Prérequis

- Node.js
- MongoDB
- 
## Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de l'environnement

Créer un fichier `.env` à la racine du projet :

```env
MONGODB_URI=mongodb://localhost:27017/albion

PORT=3000
VITE_API_URL=https://www.albion-online-data.com/api/v2/stats/
```

### 4. Base de données

Les données des items sont accessibles ici:
https://github.com/4880f362-27dc-447d-a9aa-e5d049635f76

Assurez-vous d'avoir une collection `items` dans votre base MongoDB avec la structure suivante :

```json
{
  "_id": ObjectId,
  "LocalizationNameVariable": "string",
  "LocalizationDescriptionVariable": "string", 
  "LocalizedNames": {
    "EN-US": "string",
    "FR-FR": "string",
    // ... autres langues
  },
  "LocalizedDescriptions": {
    "EN-US": "string", 
    "FR-FR": "string",
    // ... autres langues
  },
  "Index": "string",
  "UniqueName": "string"
}
```

### 5. Lancement de l'application

```bash
npm start
```

L'API sera accessible sur `http://localhost:3000`

## Utilisation

### Endpoints disponibles

#### Lister tous les objets
```
GET /
```

#### Récupérer un objet par ID
```
GET /id/:id
```

#### Récupérer un objet par nom unique
```
GET /name/:uniqueName
```

### Exemples de réponses

**Objet avec prix :**
```json
{
  "_id": "6883b691b4bc99f3b87be44e",
  "LocalizationNameVariable": "@ITEMS_T5_ORE",
  "LocalizationDescriptionVariable": "@ITEMS_ORE_DESC",
  "LocalizedNames": {
    "EN-US": "Titanium Ore",
    "DE-DE": "Titanerz"
  },
  "LocalizedDescriptions": {
    "EN-US": "Raw material. Can be refined into metal bars or transmuted into higher-level ore.",
    "DE-DE": "Rohmaterial. Kann zu Barren verarbeitet oder in Erz höherer Qualität verwandelt werden."
  },
  "Index": "967",
  "UniqueName": "T5_ORE",
  "prices": [
    {
      "city": "Bridgewatch",
      "quality": 1,
      "sell_price_min": 334,
      "sell_price_min_date": "2025-07-25T07:20:00",
      "buy_price_max": 320,
      "buy_price_max_date": "2025-07-25T07:20:00"
    }
  ]
}
```

## Structure du projet

```
albionAPI/
├── bin/
│   └── www                 # Point d'entrée de l'application
├── config/
│   └── database.js         # Configuration MongoDB
├── controllers/
│   └── itemController.js   # Contrôleurs des objets
├── models/
│   └── itemModel.js        # Modèle MongoDB des objets
├── repositories/
│   └── itemRepository.js   # Couche d'accès aux données
├── routes/
│   └── itemRouter.js       # Définition des routes
├── services/
│   ├── ApiService.js       # Service pour appels API externes
│   └── ItemService.js      # Logique métier des objets
├── views/                  # Templates Pug (non utilisés pour l'API)
├── app.js                  # Configuration Express
├── package.json
└── README.md
```

## Technologies utilisées

- **Express.js** : Framework web Node.js
- **MongoDB** : Base de données NoSQL
- **Mongoose** : ODM MongoDB pour Node.js
- **Axios** : Client HTTP pour les appels API
- **dotenv** : Gestion des variables d'environnement

## Développement

Pour le développement avec rechargement automatique :

```bash
npm install -g nodemon
nodemon bin/www
```

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commit vos changements
4. Push vers la branche
5. Ouvrir une Pull Request

## Licence

[Licence à définir]