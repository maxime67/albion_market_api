# Albion API

API REST pour récupérer les informations des objets du jeu Albion Online avec leurs prix en temps réel.

## Description

Cette API permet de consulter la base de données des objets d'Albion Online et de récupérer leurs prix actuels sur les différents marchés du jeu. Elle fournit des endpoints pour rechercher des objets par ID, par nom unique, ou lister tous les objets disponibles.

### Fonctionnalités principales

- **Consultation d'objets** : Récupération des informations détaillées des objets (noms localisés, descriptions, etc.)
- **Prix en temps réel** : Intégration avec l'API officielle d'Albion Online pour obtenir les prix actuels
- **Multi-langues** : Support de 15 langues différentes
- **Recherche flexible** : Recherche par ID MongoDB ou par nom unique d'objet

## Architecture

Le projet suit une architecture MVC classique avec :

- **Models** : Schémas MongoDB pour les objets
- **Controllers** : Logique de traitement des requêtes
- **Services** : Logique métier et intégration API externe
- **Repositories** : Couche d'accès aux données
- **Routes** : Définition des endpoints API

## Prérequis

- Node.js (version 14 ou supérieure)
- MongoDB
- Compte MongoDB Atlas ou instance MongoDB locale

## Installation

### 1. Cloner le projet

```bash
git clone <url-du-repo>
cd albionAPI
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de l'environnement

Créer un fichier `.env` à la racine du projet :

```env
MONGODB_URI=mongodb://localhost:27017/albion
# ou pour MongoDB Atlas :
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/albion

PORT=3000
VITE_API_URL=https://www.albion-online-data.com/api/v2/stats/
```

### 4. Base de données

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
  "_id": "507f1f77bcf86cd799439011",
  "LocalizationNameVariable": "@ITEMS_SWORD_NAME",
  "LocalizedNames": {
    "EN-US": "Sword",
    "FR-FR": "Épée"
  },
  "UniqueName": "T4_SWORD",
  "prices": [
    {
      "city": "Martlock",
      "quality": 1,
      "sell_price_min": 1500,
      "sell_price_min_date": "2024-01-15T10:30:00.000Z",
      "buy_price_max": 1400,
      "buy_price_max_date": "2024-01-15T10:25:00.000Z"
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
- **CORS** : Gestion des requêtes cross-origin
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