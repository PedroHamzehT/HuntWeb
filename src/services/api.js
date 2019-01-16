// Arquivo para receber e enviar dados -> serviços externos
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketseat-node.herokuapp.com/api'    // Url base, de onde vai vir a api
});

export default api;