import axios from 'axios';

//export const API_URL = "https://online-food-ordering-web.vercel.app/";

export const API_URL = "https://online-food-ordering-dynoist83-ershad-alis-projects.vercel.app"
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


