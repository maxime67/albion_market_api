const Item = require('../models/itemModel')

class ItemRepository {
    async findAll() {
        return Item.find();
    }
    async findOne(id) {
        return Item.findById(id);
    }
    async findByName(name) {
        const query = {'UniqueName': name};
        return Item.findOne(query);
    }
}

module.exports = new ItemRepository();