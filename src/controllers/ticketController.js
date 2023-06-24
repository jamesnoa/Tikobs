

const controller = {

  consultar: (req, res) => {
    console.log("Entro al método de consultar ticket.");
    res.json({
      name: 'Ticket 1',
      price: 1000
    });
  },

  crear: (req, res) => {
    console.log("Entro al método de crear ticket.");
    res.send("Entro al método de crear ticket.");
  },

  actualizar: (req, res) => {
    console.log("Entro al método de actualizar ticket.");
    res.send("Entro al método de actualizar ticket.");
  },

  eliminar: (req, res) => {
    console.log("Entro al método de eliminar ticket.");
    res.send("Entro al método de eliminar ticket.");
  }
};

module.exports = controller;
