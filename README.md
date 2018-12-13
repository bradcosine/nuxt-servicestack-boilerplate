# Nuxt / Koa / ServiceStack App Template

#### ** Fork this repository for new projects **

## Build & run the API container

_Within the /api directory_

### Docker build and run API
`docker build -t appapi .`

### Run the api container locally on port 5000
`docker run --rm -d -p 5000:80 --name appapi appapi`


## Build & run the API container

_Within the /app directory_

### Install node modules

`npm i`

### Run app in debug mode
`npm run dev`

### Build the app for production
`npm run build`

### Run the built app in production mode
`npm run start`

> TODO: Add pm2 as for when we actually run in production

>See [this github issue][github] for details

#### (*uncommon*) Generate static html site (no SSR) 
`npm run generate`


[github]: https://github.com/nuxt/nuxt.js/issues/1541#issuecomment-407680726