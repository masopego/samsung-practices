const http = require("http");
const querystring = require("querystring");
const MongoClient = require("mongodb").MongoClient;

const port = 8000;
const url = "mongodb://localhost:27017";

const dbName = "contacts";
const client = new MongoClient(url, { useUnifiedTopology: true });
let db;

client.connect((err) => {
  if (err) {
    console.log("Error al conectar al servidor: ", err);
    return;
  }
  console.log("Conectado con éxito al servidor");
  db = client.db(dbName);
});

const insertDocument = (collectionName, document, callback) => {
  const collection = db.collection(collectionName);
  collection.insertOne(document, (err, result) => {
    if (err) {
      console.log("Error insertando documento: ", err);
    }
    callback(err, result);
  });
};

const findDocuments = (collectionName, callback) => {
  const collection = db.collection(collectionName);
  collection.find({}).toArray((err, docs) => {
    if (err) {
      console.log("Error recuperando documentos: ", err);
    }
    callback(err, docs);
  });
};

const server = http.createServer((request, response) => {
  const { method } = request;

  if (method === "POST") {
    let body = [];
    request
      .on("error", (err) => {
        console.error(err);
      })
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        body = Buffer.concat(body).toString();
        const contact = querystring.decode(body);
        insertDocument("contacts", contact, (err, result) => {
          findDocuments("contacts", (err, docs) => {
            response.statusCode = 200;
            response.setHeader("Content-Type", "application/json");
            response.end(JSON.stringify(docs));
          });
        });
      });

    return;
  }
  response.statusCode = 404;
  response.setHeader("Content-Type", "text/plain");
  response.end("Page not found");
});

server.listen(port, () => {
  console.log("Servidor ejecutándose...");
  console.log("Abrir en un navegador http://localhost:8000");
});
