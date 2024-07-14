const port = process.env.PORT || 3000
var express = require('express');
const cors = require('cors');
const connection = require('./ddbb')


var app = express();

app.use(cors()) 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* var mysql      = require('mysql2');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'agush',
  database : 'turismo'
});
 
connection.connect(); */


app.get('/', (req, res) => {
    connection.query('SELECT p.id_paquete, d.nombre AS nombre_destino, d.detalle, d.imagen, p.precio,p.duracion, p.disponible, pro.descuento AS descuento FROM paquete p JOIN destino d ON p.id_destino=d.id_destino JOIN promocion pro ON pro.id_promo=p.id_promo;', function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    })
})


app.get('/buscar/:id', (req, res) => {
    let sentencia = 'SELECT p.id_paquete, d.nombre AS nombre_destino, d.detalle, d.imagen, p.precio,p.duracion, p.disponible, pro.descuento AS descuento FROM paquete p JOIN destino d ON p.id_destino=d.id_destino JOIN promocion pro ON pro.id_promo=p.id_promo where id_paquete = ';;

    //connection.query('SELECT * from paquete where id_paquete = ' + req.params.id, function (error, results, fields) {
    connection.query(sentencia + req.params.id, function (error, results, fields) {
        if (error) throw error;
        res.json(results)
    })
})

app.post('/alta/', function(req, res) {
  
    console.log(req.body)
    let sentencia = `INSERT INTO paquete (id_destino, precio, duracion, disponible, id_promo) VALUES (${req.body.id_destino}, ${req.body.precio}, ${req.body.duracion}, ${req.body.disponible}, ${req.body.id_promo})`;
    
    connection.query(sentencia, function (error, results) {
        //console.log(req.body)
        if (error) throw error;
        res.json(results);
    });
});


app.put('/editar/:id', (req, res) => {

    res.header('Access-Control-Allow-Methods', 'PUT'); // Agrega los métodos permitidos
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Agrega las cabeceras permitidas
    //res.status(200).send();

    //console.log(req.body)
    let sentencia = 'update paquete set id_destino = ' + req.body.id_destino + ', precio = ' + req.body.precio + ', duracion = ' + req.body.duracion + ', disponible = ' + req.body.disponible + ', id_promo = ' + req.body.id_promo + ' where id_paquete = ' + req.params.id;
    
    connection.query(sentencia, function (error, results) {
        console.log(req.body)
        if (error) throw error;
        res.json("Modificacion exitosa");
    });
})

app.delete('/baja/:id', (req, res) => {

    let sentencia = 'delete from paquete where id_paquete= ' + req.params.id;
    
    connection.query(sentencia, function (error, results) {
        //console.log(req.body)
        if (error) throw error;
        res.json("Paquete eliminado");
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})