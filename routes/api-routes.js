// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

var db = require('../models');
// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the todos
  app.get("/api/dailies", function (req, res) {
    db.Daily.findAll({}).then(function (results) {
      // results are available to us inside the .then
      res.json(results);
    });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/dalies", function (req, res) {
    db.Daily.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function (results) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(results);
    });
  });



  // // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // // req.params.id
  // app.delete("/api/Dailys/:id", function (req, res) {
  //    // Destroy takes in one argument: a "where object describing the todos we want to destroy
  //    db.Daily.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(results) {
  //       res.json(results);
  //     });
  // });

  // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/dailies", function (req, res) {
        // Update takes in two arguments, an object describing the properties we want to update,
    // and another "where" object describing the todos we want to update
    db.Daily.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    })
      .then(function(results) {
        res.json(results);
      });
  });
}