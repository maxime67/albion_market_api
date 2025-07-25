const itemRepository = require('../repositories/ItemRepository');
class CompagnieService {
    async findAll() {
        try {
            return await itemRepository.findAll()
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async findOne(id) {
        try{
            return await itemRepository.findOne(id)
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async findByName(name) {
        try{
            return await itemRepository.findByName(name);
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

}

module.exports = new CompagnieService()