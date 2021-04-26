const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3343, ()=> console.log('Servidor ON - Rodando na porta 3343 !!!'));