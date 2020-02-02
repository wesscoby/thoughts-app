#!/usr/bin/env bash

port=$(node -e "console.log(process.env.PORT)")
domain=$(node -e "console.log(process.env.AUTH0_DOMAIN)")
client_id=$(node -e "console.log(process.env.AUTH0_CLIENT_ID)")
client_secret=$(node -e "console.log(process.env.AUTH0_CLIENT_SECRET)")
callback_url=$(node -e "console.log(process.env.CALLBACK_URL)")
base_url=$(node -e "console.log(process.env.BASE_URL)")


if [ ! -f config.js ]; then
  cat > config.js << EOF
// read process.env.NODE_ENV to set values depending on environment
module.exports = {
  PORT: '${port}',
  AUTH0_DOMAIN: '${domain}',
  AUTH0_CLIENT_ID: '${client_id}',
  AUTH0_CLIENT_SECRET: '${client_secret}',
  CALLBACK_URL: '${callback_url}',
  BASE_URL: '${base_url}',
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