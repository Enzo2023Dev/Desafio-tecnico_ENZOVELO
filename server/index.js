const express = require('express');
const cors = require('cors');
const userRouter = require("./router/users");
const database = require('./database/database');
const app = express();


(async () => {
    try {
        await database.authenticate();
        await database.sync();
        console.log("Base de datos conectada");
    }catch (error){
        throw new Error(error);
    }
})();


// Creando el PORT
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); //Recibir información
app.use(cors()); //Habilitar otras Apps

app.use("/usuarios", userRouter);

app.listen(port, () => {
    console.log(`La aplicación esta arrancando en el puerto http://localhost:${port}`)
});
