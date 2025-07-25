
class CompagnieService {
    async test() {
        try {
            let resp = await fetch('https://west.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG?locations=Caerleon,Bridgewatch&qualities=2')
            return resp.json();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = new CompagnieService()