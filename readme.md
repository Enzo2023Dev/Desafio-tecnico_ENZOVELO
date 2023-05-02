
# Desafío Técnico

Para esto creamos dos carpetas dentro de la carpeta del proyecto, una llamada *client* para el trabajo Frontend y otra llamada *server* para el trabajo Backend.

Para esto hay que tener instalado [Node.js](https://nodejs.org/es).

Y para diseñar, depurar y probar API, como opción puede descargar [Insomnia](https://insomnia.rest/)

## Especificaciones técnicas

#### Frontend (client)

Vite - ReactJS, TailwindCSS

```
  cd client
  npm init -y
  npm create vite@latest my-project -- --template react
  npm install
  npm install react-router-dom
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  npm install react-icons --save
  npm install axios
```
MySql, Express, Sequelize, NodeJS

#### Backend (server)

```
  cd server
  npm init -y
  npm install express cors mysql2
  npm install nodemon
  npm install sequelize sequelize-cli
  sequelize init
  npm install jsonwebtoken
```