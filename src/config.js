window.axios =require('axios');
//window.axios.defaults.baseURL = 'http://192.168.15.24/inventario-api/';
//window.axios.defaults.baseURL = 'http://192.168.15.30/usupso/inventario-api/public';
window.axios.defaults.baseURL = 'http://3.19.190.69/inventario-api/';
window.axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
export const axios = window.axios;
