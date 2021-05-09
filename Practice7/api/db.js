const MongoClient = require("mongodb").MongoClient;
let db = null;

const dataBase = {
  connect: function (url, callback) {
    // Si ya está conectado, no se vuelve a conectar
    if (db) {
      return callback();
    }
    // Crear una instancia del cliente de MongoDB
    const client = new MongoClient(url, { useNewUrlParser: true });
    // Conectar el cliente al servidor
    client.connect(function (err, result) {
      if (err) {
        return callback(err);
      }
      console.log("Conectado a BD");
      db = result;
      callback();
    });
  },

  close: function (callback) {
    if (db) {
      db.close(function (err, result) {
        console.log("Desconectado de BD");
        db = null;
        callback(err);
      });
    }
  },

  get: function () {
    return db;
  },
};

module.exports = dataBase;
