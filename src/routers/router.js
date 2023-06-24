
const path = require('path');

function configureRoutes(app) {

  // Ticket
  console.log(path.join(__dirname, "./ticket/ticketRouter"));
  const ticketRouter = require(path.join(__dirname, "./ticket/ticketRouter"));
  app.use('/ticket', ticketRouter);

  // Users
  app.use('/users', (req, res) => {
    // Lógica para manejar rutas de usuarios
    res.send("Hola mi server en express, controller user");
    console.log('¡Hola mi server en express!');
  });

}
module.exports = configureRoutes;
