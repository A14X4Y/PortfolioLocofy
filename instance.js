import axios from 'axios';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const $axios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
