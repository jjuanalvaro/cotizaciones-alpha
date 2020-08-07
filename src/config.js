window.axios =require('axios');
//window.axios.defaults.baseURL = 'http://192.168.0.150:8000';
window.axios.defaults.baseURL = 'http://3.19.190.69/expense-api/';
window.axios.defaults.headers.common['Authorization'] = localStorage.getItem('access_token');
export const axios = window.axios;
