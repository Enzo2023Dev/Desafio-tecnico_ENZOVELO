
const database = require("../database/database");
const Users = require("../models/users");
const router = require("express").Router();
const jtw = require("jsonwebtoken");

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    const usuarios = await Users.findAll();
    res.json(usuarios);
});

// Obtener solo un usuario
router.get("/:id", async (req, res) => {
    const {id} = req.params;

    const findIdUser = await Users.findByPk(id);

    res.json(findIdUser);
});

router.get("/:id/lista", verifyToken, async (req, res) =>{
    const usuarios = await Users.findAll();
    res.json(usuarios);
})

const TOKEN_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(authHeader);

    if (token == null) 
        return res.sendStatus(401).send("Token requerido");
    jtw.verify(token, TOKEN_KEY, (err, user) =>{
        if(err) return res.status(403).send("token invalido");
        console.log(user);
        req.user = user;
        next();
    })
}


// Acceder
router.post("/login", (req, res) => {
   
    const {email ,contraseña} = req.body;
    
    if(email == email && contraseña == contraseña){
        const datos = Users.findAll ({attributes: ['email', 'contraseña']},{
            email: email,
            contraseña: contraseña
        })
        
        const token = jtw.sign(
            {
                email: datos.email,
                contraseña: datos.contraseña
            },
            TOKEN_KEY,
            {expiresIn: "2h"}
        );

        let nDatos = {...datos, token};
        
        res.status(200).json(
            nDatos
        )


    }else{
        res.status(400).send("Incorrecto")
    }
   })
    

    /*if(email == email && contraseña == contraseña){
        const datos = {
            email: '',
            contraseña: '',
        }
        
        const token = jtw.sign(
            {
                id: data.id,
                email: data.email
            },
            TOKEN_KEY,
            {expiresIn: "2h"}
        );

        let nDatos = {...data, token};
        
        res.status(200).json(
            nDatos
        )


    }else{
        res.status(400).send("Incorrecto")
    }*/


// Crear un usuario
router.post("/register", async (req, res) => {
    const {nombre, apellido, email, contraseña} = req.body;

    if (!nombre || !apellido || !email || !contraseña) {
        return res.status(400).json({
            error: "Faltan datos",
        });
    }

    const createUser = await Users.create({nombre, apellido, email, contraseña})

    res.json(createUser);
}); 

module.exports = router;
