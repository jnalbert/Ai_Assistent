import Config from 'config-js';
const axios =  require('axios');


const config = new Config('./config.js');

const LIFX_TOKEN = `Bearer ${config.get('token')}`;

axios.defaults.headers['Authorization'] = LIFX_TOKEN;

const baseURL = 'https://api.lifx.com/v1/lights';

const Util = {
    async getLights() {
        const response = await axios.get(`${baseURL}/all`)
        console.log(response.data);
    }
}

export default  Util;