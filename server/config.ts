import dotenv from 'dotenv';

dotenv.config();

export const {
  NODE_ENV, PORT, AUTH0_DOMAIN, 
  AUTH0_CLIENT_ID, AUTH0_CLIENT_SECRET,
  BASE_URL, CALLBACK_URL
} = process.env;