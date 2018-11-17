const db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    db.Burgers
      .findAll()
      .then((burgerData) => {
        // res.json(burgerData)
        // console.log(burgerData);
        res.render("index", { burgers: burgerData });
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });

  app.post("/api/burgers", function (req, res) {
    db.Burgers
      .create(req.body)
      .then((burgerData) => {
        res.json(burgerData);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });

  app.put("/api/burgers/:id", function (req, res) {
    db.Burgers
      .update(
        req.body,
        {
          where: {
            id: req.params.id
          }
        })
      .then((burgerData) => {
        res.json(burgerData);
      })
      .catch(function (err) {
        console.log(err);
        res.json(err);
      });
  });
}