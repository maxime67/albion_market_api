const axios = require('axios');

class Api {
    constructor() {
        this.client = axios.create({
            baseURL: process.env.VITE_API_URL || 'http://localhost:3000',
            headers: {
                'Content-Type': 'application/json',
            },
            timeout: 10000, // 10 secondes
        });
    }

    async get(url) {
        try {
            const response = await this.client.get(url);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la requête GET:', error.message);
            throw error;
        }
    }
}

module.exports = new Api();