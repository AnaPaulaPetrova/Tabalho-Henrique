class RoupasRepository {
    constructor(database) {
        this.database = database;
    }
    async getAllRoupas(){
        try {
            const sql = "select * from Roupas";
            const respostaBD = await this.database.query(sql);

            return respostaBD.rows;
        } catch (error) {
            return {error: error.message};
        }
    }
    async getRoupaId(id){
        try {
            const sql = "select nome, tamanho, preco from tamanhos where id_roupa = $1";
            const respostaBD = await this.database.query(sql, [id]);

            return respostaBD.rows;
        } catch (error) {
           return {error: error.message}; 
        }
    }
    async setPagamento(infoPagamento) {
    try{
      const sql = `insert into vendas 
                  (cpf, valorTotal, datacompra)
                  values ($1, $2, $3`;
      const response = await this.database.query(sql, [
        infoPagamento.cpf,
        infoPagamento.valorTotal, 
        infoPagamento.datacompra
      ]);
      return "Pagamento realizado!";
      } catch(error){
      return{ error: error.message}
    }
     }
    async todosPagamentos() {
      try {
        const sql = "select * from vendas";
        const responseDB = await this.database.query(sql);

        return responseDB.rows; 
      } catch (error) {
        return { error: error.message};
      }
    }
}

module.exports = RoupasRepository