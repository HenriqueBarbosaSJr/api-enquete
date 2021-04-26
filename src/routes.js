const express = require('express');

const routes = express.Router();

const enqController = require('./enqControllers/enqController');

routes.get('/', enqController.raiz);
routes.post('/enquete', enqController.create);
routes.get('/enquete', enqController.respostas);

routes.get('/enquetesf', enqController.respostasF);
routes.get('/enquetesm', enqController.respostasM);

routes.get('/enqueteef', enqController.respostasEF);
routes.get('/enqueteem', enqController.respostasEM);
routes.get('/enquetees', enqController.respostasES);

routes.get('/respostasmaior18', enqController.respostasMaior18);
routes.get('/respostasmenor18', enqController.respostasMenor18);

routes.get('/respostasop1', enqController.respostasOP1);
routes.get('/respostasop2', enqController.respostasOP2);
routes.get('/respostasop3', enqController.respostasOP3);

routes.get('/resetall', enqController.resetall);

module.exports = routes;