const validationResult = require("express-validator").validationResult;
const ObjectID = require("mongodb").ObjectID;

const UsersController = {
  getUsers: (req, res, next) => {
    const collection = req.app["db"].db("contacts").collection("contacts");
    collection.find({}).toArray((err, docs) => {
      if (err) {
        console.log("Error recuperando documentos: ", err);
        next(err);
      }
      res.json(docs);
    });
  },

  createUser: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let user = req.body;
    const collection = req.app["db"].db("contacts").collection("contacts");
    collection.insertOne(user, (err, result) => {
      if (err) {
        console.log("Error insertando documento: ", err);
        next(err);
      }
      res.json(user);
    });
  },
  updateUser: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    let user = req.body;

    const collection = req.app["db"].db("contacts").collection("contacts");
    collection.updateOne(
      { _id: ObjectID(req.params.id) },
      { $set: user },
      (err, result) => {
        if (err) {
          console.log("Error actualizando documento: ", err);
          next(err);
        }
        res.json(user);
      }
    );
  },

  deleteUser: (req, res, next) => {
    const collection = req.app["db"].db("contacts").collection("contacts");
    collection.deleteOne({ _id: ObjectID(req.params.id) }, (err, result) => {
      if (err) {
        console.log("Error borrando documento: ", err);
        next(err);
      }
      res.json({ success: true });
    });
  },
};

module.exports = UsersController;
