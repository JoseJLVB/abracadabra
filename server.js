const express = require('express')
const app = express()

app.use(express.static('static'));
app.use(express.static('assets'));

app.get('/abracadabra/usuarios', async(req, res) => {
    const usuarios = [
        'Axl',
        'Slash',
        'Lita',
        'Duff',
        'Matt',
        'Izzy',
        'Joan',
    ];
    res.json(usuarios);
});

app.get("/abracadabra/conejo/:n", (req, res) => {

    const seleccion = Math.floor(Math.random() * (5 - 1)) + 1;
    const n = req.params.n;
    n == seleccion
    ? res.redirect("/conejito.jpg")
    : res.redirect("/voldemort.jpg");

})


app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const { usuario } = req.params;
    usuario == "usuario" 
    ? next() : res.send("/who.jpeg");
});

app.get("/abracadabra/juego/:usuario", (req, res, next) => {
    res.send("Si, usuario existe")
});    

app.get("*", (req, res) => {
    res.send('<h1 style="color:red">Esta página no existe...</h1>');
});

app.listen(3000, () => {
    console.log('El servidor está inicializado en el puerto 3000')
})