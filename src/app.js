
const express = require('express');
const app = express();
const port = 3000;

const path = require('path');
const configureRoutes = require(path.join(__dirname, "routers/router"));
configureRoutes(app);

app.listen(port, () => {
  console.log(`Inicio Tikobs en el puerto ${port}`);
});

