const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config')

// Carrega as rotas
const indexRoute   = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

const config = require('./config')

const app = express();
const router = express.Router();

// Conecta ao banco
mongoose.connect(config.connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( 
    res => console.log('Banco conectado')
).catch( 
    err => console.log('Não foi possível conectar ao banco')
)

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

// Carrega os Models
const Product = require('./models/products');
const Customer = require('./models/customer');
const Order = require('./models/order');

app.use( bodyParser.json({
    limit: '5mb'
}) );
app.use( bodyParser.urlencoded({ extended: false }) );

app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
})


app.use('/', indexRoute)
app.use('/products', productRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

module.exports = app;