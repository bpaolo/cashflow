const { jwtAuth } = require("../middleware");
const cashflowServices = require("../services/cashflow-services.js");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization", "Origin, Content-Type, Accept");
    next();
  });

  // add a cashflow 
  app.post("/api/auth/addcashflow", [jwtAuth.verifyToken], cashflowServices.create);

  // find all cashflow
  app.get("/api/auth/getcashflows", [jwtAuth.verifyToken], cashflowServices.findAll);

  // find cashflow by cashflow id
  app.post("/api/auth/getcashflowbyid", [jwtAuth.verifyToken], cashflowServices.findOne);
  
  // find cashflow by cashflow date
  app.post("/api/auth/getcashflowbyDate", [jwtAuth.verifyToken], cashflowServices.findAllByDate);
  
  // find consolidated balance of the day
  app.post("/api/auth/findBalanceByDate", [jwtAuth.verifyToken], cashflowServices.findBalanceByDate);

  // update cashflow by cashflow id
  app.post("/api/auth/update", [jwtAuth.verifyToken], cashflowServices.update);

  // delete cashflowby cashflow id
  app.post("/api/auth/delete", [jwtAuth.verifyToken], cashflowServices.delete);

};