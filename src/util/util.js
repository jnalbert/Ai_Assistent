const axios =  require('axios');
const {REACT_APP_FLIX_TOKEN} = process.env

const LIFX_TOKEN = `Bearer ${REACT_APP_FLIX_TOKEN}`;

axios.defaults.headers['Authorization'] = LIFX_TOKEN;

const baseURL = 'https://api.lifx.com/v1/lights';

const Util = {
    async getLights() {
        const response = await axios.get(`${baseURL}/all`)
        console.log(response.data);
    }
}

export default  Util;