const express = require('express');
const router = express.Router();

const path = require('path');
const ticketController = require(path.join(__dirname, "../../controllers/ticketController"));

//#region Controllers

// Consultar Ticket
router.get("/consultar", ticketController.consultar);

// Crear Ticket
router.get("/crear", ticketController.crear);

// Actualizar Ticket
router.get("/actualizar", ticketController.actualizar);

// Eliminar Ticket
router.get("/eliminar", ticketController.eliminar);


router.get("/producto", (req, res) => {
  res.json({
    name: 'Producto 1',
    price: 1000
  });
});

//#endregion

module.exports = router;
