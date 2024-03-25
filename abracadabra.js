const express = require('express')
const app = express()

const router = express.Router();
app.use(express.static('assets'));
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
    });
//Ruta para usuarios
app.get("/abracadabra/usuarios",(req,res)=> { 
    const usuarios = [
        "Juan",
        "Jocelyn",
        "Astrid",
        "Maria",
        "Ignacia",
        "Javier",
        "Brian"
    ];
    res.json(usuarios);
});

const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"];

const usuarioValido = (req, res, next) => {
  const { usuario } = req.params;
  if (!usuarios.includes(usuario)) {
    return res.sendFile(`${__dirname}/assets/who.jpeg`);
  }
  next();
};


//Ruta para juegousuarios no me funciona
router.get('/abracadabra/juego/:usuario:', usuarioValido, (req, res) => {
    // Accede al usuario validado directamente desde req.params
    const { usuario } = req.params;
  
    // Lógica para la ruta después de la validación del usuario
    res.send(`¡Bienvenido, ${usuario}!`);
  });
  
  module.exports = router;
  
//Ruta para conejo
app.get('/abracadabra/conejo/:n', (req, res) => {
  const { n } = req.params;
  const imagen = n === randomNumber ? 'conejo.jpg' : 'voldemort.jpg';
  res.sendFile(`${__dirname}/assets/${imagen}`);
});
//Ruta inexistente
app.use((req, res) => {
  res.send('Esta página no existe...');
});


