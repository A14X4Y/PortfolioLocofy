import axios from 'axios';

export const $axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
