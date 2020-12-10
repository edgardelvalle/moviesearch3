import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '18693dbf2e013e193207cae1f0af5059',
    // api_key: process.env.REACT_APP_API_KEY,
  },
});
