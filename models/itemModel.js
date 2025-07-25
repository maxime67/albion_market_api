const mongoose = require('mongoose');

// Configuration pour désactiver la validation stricte des ObjectId
mongoose.set('strictQuery', false);

// Schéma pour les noms localisés
const localizedNamesSchema = new mongoose.Schema({
    'EN-US': { type: String, required: false },
    'DE-DE': { type: String, required: false },
    'FR-FR': { type: String, required: false },
    'RU-RU': { type: String, required: false },
    'PL-PL': { type: String, required: false },
    'ES-ES': { type: String, required: false },
    'PT-BR': { type: String, required: false },
    'IT-IT': { type: String, required: false },
    'ZH-CN': { type: String, required: false },
    'KO-KR': { type: String, required: false },
    'JA-JP': { type: String, required: false },
    'ZH-TW': { type: String, required: false },
    'ID-ID': { type: String, required: false },
    'TR-TR': { type: String, required: false },
    'AR-SA': { type: String, required: false }
}, { _id: false });

// Schéma pour les descriptions localisées
const localizedDescriptionsSchema = new mongoose.Schema({
    'EN-US': { type: String, required: false },
    'DE-DE': { type: String, required: false },
    'FR-FR': { type: String, required: false },
    'RU-RU': { type: String, required: false },
    'PL-PL': { type: String, required: false },
    'ES-ES': { type: String, required: false },
    'PT-BR': { type: String, required: false },
    'IT-IT': { type: String, required: false },
    'ZH-CN': { type: String, required: false },
    'KO-KR': { type: String, required: false },
    'JA-JP': { type: String, required: false },
    'ZH-TW': { type: String, required: false },
    'ID-ID': { type: String, required: false },
    'TR-TR': { type: String, required: false },
    'AR-SA': { type: String, required: false }
}, { _id: false });

// Schéma principal de l'item
const itemSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        auto: false // Désactive la génération automatique d'_id
    },
    LocalizationNameVariable: {
        type: String,
        required: true
    },
    LocalizationDescriptionVariable: {
        type: String,
        required: true
    },
    LocalizedNames: {
        type: localizedNamesSchema,
        required: true
    },
    LocalizedDescriptions: {
        type: localizedDescriptionsSchema,
        required: true
    },
    Index: {
        type: String,
        required: true
    },
    UniqueName: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: false, // Désactive les timestamps automatiques pour les données existantes
    collection: 'items', // Nom exact de votre collection MongoDB existante
    strict: false, // Permet des champs non définis dans le schéma
    versionKey: false // Désactive le champ __v
});

// Index pour améliorer les performances de recherche
itemSchema.index({ Index: 1 });

// Export du modèle
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;