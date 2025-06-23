const express = require("express");
const Controller = require("./controller");
const cors = require("cors");

const server = express();
const PORT = 8080;

server.use(cors());
server.use(express.json());

server.get("/roupas", Controller.getAllRoupas);
server.get("/roupa/:id", Controller.getRoupaId);
server.post("/pagamento", Controller.setPagamento);
server.get("/historico", Controller.todosPagamentos);

server.listen(PORT, () => console.log("Server ON!"));
