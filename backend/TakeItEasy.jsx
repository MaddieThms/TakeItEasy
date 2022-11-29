const database = require("./database");

const GetMarco = (req, res) => {
  database
    .query("select * from Marco")
    .then(([Marco]) => {
      res.json(Marco);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const GetEsther = (req, res) => {
  database
    .query("select * from Esther")
    .then(([Esther]) => {
      res.json(Esther);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
module.exports = {
  GetMarco,
  GetEsther,
};
