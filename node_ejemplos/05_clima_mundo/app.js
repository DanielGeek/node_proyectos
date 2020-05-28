const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const encodeUrl = encodeURI( argv.direccion );
console.log(encodeUrl);

const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
    headers: {'x-rapidapi-key': '5a23052051msh02b6a46c23e9d20p129f9bjsn2a8b57eb1575'}
  });

instance.get()
        .then( resp => {
            console.log(resp.data.Results[0]);
        })
        .catch( err => {
            console.log('ERROR!!!', err );
        })