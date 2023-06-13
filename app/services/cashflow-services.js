const db = require("../models");
const Cashflow = db.cashflow;
// const Op = db.Sequelize.Op;

// Add new cashflow
exports.create = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const cashflow = {
    typeFlow: req.body.type,
    valueFlow: req.body.value,
    description: req.body.description,
    create_at: Date.now(),
    update_at: Date.now()
  };

  Cashflow.create(cashflow)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when add a cashflow!"
      });
    });
};

// Find all cashflows
exports.findAll = (req, res) => {
  Cashflow.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error when get all cashflow!"
      });
    });
};

// Find cashflow by cashflow id
exports.findOne = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Cashflow.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Cashflow not found!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error when get cashflow by cashflow id : " + id
      });
    });
};

// Find cashflow by cashflow by date
exports.findAllByDate = (req, res) => {
  validateRequest(req);

  const dataCreatedAt = req.body.data;
    Cashflow.findAll({ where: {create_at: dataCreatedAt} })
      .then(data => {
        res.send((data));
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error when get all product by date!"
        });
      });
  };

  exports.findBalanceByDate = (req, res) => {
  validateRequest(req);

  const dataCreatedAt = req.body.data;
    Cashflow.sum("valueFlow",({ where: {create_at: dataCreatedAt} }))
      .then(data => {
        res.send((data).toString());
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error when get all product by date!"
        });
      });
  };
  // const dataCreatedAt = req.body.data;
  //   Cashflow.findAll({ where: {createdAt: dataCreatedAt} })
  //     .then(data => {
  //       res.send(data);
  //     })
  //     .catch(err => {
  //       res.status(500).send({
  //         message:
  //           err.message || "Error when get all product by date!"
  //       });
  //     });
  // };

// Update cashflow by cashflow id
exports.update = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);

  const id = req.body.id;
  Cashflow.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cashflow successfully updated."
        });
      } else {
        res.send({
          message: "Update process was failedQ"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating cashflow with cashflow id : " + id
      });
    });
};

// Delete cashflow by cashflow id
exports.delete = (req, res) => {
  console.log("Request : ", req.body)
  validateRequest(req);
  
  const id = req.body.id;
  Cashflow.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Cashflow successfully deleted."
        });
      } else {
        res.send({
          message: "Delete process was failed!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Couldn't delete cashflow with cashflow id : " + id
      });
    });
};

function validateRequest(req){
  if (!req.body) {
    res.status(400).send({
      message: "Request is empty!"
    });
    return;
  }
}


