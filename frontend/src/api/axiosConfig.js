import axios from 'axios';

export default axios.create({
    baseURL:'https://springbootproject-h2xy.vercel.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});