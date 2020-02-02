#!/usr/bin/env bash

if [ ! -f config.js ]; then
  cat > config.js << EOF
// read process.env.NODE_ENV to set values depending on environment
module.exports = {
  PORT: '${process.env.PORT}',
  AUTH0_DOMAIN: '${process.env.AUTH0_DOMAIN}',
  AUTH0_CLIENT_ID: '${process.env.AUTH0_CLIENT_ID}',
  AUTH0_CLIENT_SECRET: '${process.env.AUTH0_CLIENT_SECRET}',
  CALLBACK_URL: '${process.env.CALLBACK_URL}',
  BASE_URL: '${process.env.BASE_URL}',
};
EOF
fi;

if [ ! -f server/config.js ]; then
  cat > server/config.js << EOF
// read process.env.NODE_ENV to set values depending on environment
module.exports = {
  SESSION_SECRET: 'some secret',
};
EOF
fi;