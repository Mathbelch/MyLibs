// Importing dependencies:
const express = require('express');
const routes = require('./routes');

// Creating app to initialize express;
const app = express()

// Defining the port number for local host (3000 is a default port for local hosts):
const port = 3000;

routes(app);

// Adding a message to let us know the host is online:
app.listen(port, () => console.log(`Servidor online na porta ${port}`));

// Exporting app to other aplications:
module.export = app;

// Configuring app (express) to be used together with bodyParser, in order to converte the responses from http requests in json format:
   //app.use(bodyParser.json());

// Testing a request with status 200 end a messagem as response:
   /*app.get('/teste', (req, res) => res
      .status(200)
      .send({mensagem: 'Boas-vindas à API'}));*/