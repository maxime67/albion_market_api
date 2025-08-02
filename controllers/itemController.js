var itemService = require('../services/ItemService')

class ItemController {
    async findAll(req, res, next){
        try{
            res.json(await itemService.findAll());
        }catch (error){
            console.log(error);
            throw error;
        }
    }

    async findOne(req, res, next){
        try{
            if(req.params.id === undefined){
                return res.status(400).send('No Id provided');
            }
            res.json(await itemService.findOne(req.params.id));
        } catch (error) {
            console.error(error);
            throw error
        }
    }

    async findByName(req, res, next){
        try{
            if(req.params.name === undefined || req.params.name.length === 0) {
                return res.status(400).send({error: 'No name provided'});
            }
            const data = await itemService.findByName(req.params.name);
            if(data.length === 0){
                return res.status(404).send({error: 'Not found'});
            }
            data.charts= await itemService.findByNameWithTimeData(req.params.name);
            res.json(data)
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    async findByNameWithChartData(req, res, next){
        try{
            if(req.params.name === undefined || req.params.name.length === 0) {
                return res.status(400).send({error: 'No name provided'});
            }
            const data = await itemService.findByNameWithTimeData(req.params.name);
            if(data.length === 0){
                return res.status(404).send({error: 'Not found'});
            }
            res.json(data)
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = new ItemController()