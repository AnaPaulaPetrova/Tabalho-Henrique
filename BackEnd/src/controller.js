const database = require("./database");
const RoupasRepository = require("./repository");
const repository = new RoupasRepository(database);

async function getAllRoupas(request, reply) {
    const respostaBD = await repository.getAllRoupas();

    if(respostaBD.error) return reply.status(404).json(respostaBD.error);

    reply.json(respostaBD);
}

async function getRoupaId(request, reply){
    const id = request.params.id;
    const resposeDB = await repository.getRoupaId(id);
    
    if(resposeDB.error) return reply.status(404).json(resposeDB.error);

    const resposta = {
        roupa: resposeDB,
    };
    reply.json(resposta);
}
async function setPagamento(request, reply) {
    const infoPagamento = request.body;

    const respostaBD = await repository.setPagamento(infoPagamento);

    if (respostaBD.error) return reply.status(404).json(respostaBD.error);

    reply.json(respostaBD);
}
async function todosPagamentos(request, reply){
  const responseDB = await repository.todosPagamentos();

  if (responseDB.error) return reply.status(404).json(responseDB.error);

  reply.json(responseDB);
}

module.exports = {getAllRoupas, getRoupaId, setPagamento, todosPagamentos}