const itemRepository = require('../repositories/ItemRepository');
const Api = require('./ApiService')

class CompagnieService {
    async findAll() {
        return await itemRepository.findAll()
    }

    async findOne(id) {
        const item = await itemRepository.findOne(id)
        const price = await this.getPrices(item)

        return {
            ...item.toJSON(),
            prices: price
        }
    }

    async findByName(name) {
        const item = await itemRepository.findByName(name)
        if(!item) {
            return []
        }
        const price = await this.getPrices(item)
        const priceChart = await this.getChartPrices(item)
        console.log(price2)

        return {
            ...item.toJSON(),
            prices: price,
            chartPrices: priceChart
        }
    }

    async getPrices(item,locations = ["5003","Martlock","Lymhurst", "Thetford","Bridgewatch","Fort Sterling"]) {
        const locationsString = locations.join(',')
        const prices = await Api.get(`Prices/${item.UniqueName}.json?locations=${locationsString}&qualities=1%2C2%2C3%2C4%2C5%2C6%2C7%2C8`)
        let priceFiltered = []
        prices.forEach(price => {
            priceFiltered.push({
                city: price.city,
                quality: price.quality,
                sell_price_min: price.sell_price_min,
                sell_price_min_date: price.sell_price_min_date,
                buy_price_max: price.buy_price_max,
                buy_price_max_date: price.buy_price_max_date,
            })
        })
        return  priceFiltered.filter(i => i.sell_price_min !== 0 && i.buy_price_max !== 0)
    }

    async getChartPrices(item,locations = ["5003","Martlock","Lymhurst", "Thetford","Bridgewatch","Fort Sterling"]) {
        const locationsString = locations.join(',')

        return await Api.get(`history/${item.UniqueName}?time-scale=24&locations=${locationsString}`)
    }
}

module.exports = new CompagnieService()