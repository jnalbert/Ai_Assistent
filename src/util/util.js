const axios =  require('axios');
const {REACT_APP_LIFX_TOKEN} = process.env

const LIFX_TOKEN = `Bearer ${REACT_APP_LIFX_TOKEN}`;

axios.defaults.headers['Authorization'] = LIFX_TOKEN;

const baseURL = 'https://api.lifx.com/v1/lights';

const Util = {
    async getLights() {
        const response = await axios.get(`${baseURL}/all`)
        console.log(response.data);
    },

    togglePower() {
        axios.post(`${baseURL}/location:Matthew_Room/toggle`);
    },
    
    async intruderAlert(){
        const response = await axios.post(`${baseURL}/location:Matthew_Room/effects/pulse`, {
            color: "blue",
            from_color: "red",
            period: 0.2,
            cycles: 30,
            power_on: true
        })
        console.log(response.data.results);
    }

}

export default Util;