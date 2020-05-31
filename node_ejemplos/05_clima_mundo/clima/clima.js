const axios = require('axios');

const getClima = async ( lat, lng ) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=01c3b7bb77808e57bb1fcde569aa18b8&units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
}