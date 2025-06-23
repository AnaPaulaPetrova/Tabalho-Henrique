var informacaoRoupa = {};
var precoTotal = 0.0;

async function getRoupa(idRoupa) {
    const resposta = await fetch("http://localhost:8080/roupa/" + idRoupa);
    const data = await resposta.json();
    var informacaoPagamento = data.roupa;
    console.log(data.roupa);
    informacaoRoupa = data.roupa;

    renderTamanhos();
    document.querySelector(".containerTabela").style.display="grid";
}
function renderTamanhos() {
    document.querySelector(".tamanhos").innerHTML = "";
   
    let id = 0;

    for (let tamanhos of informacaoRoupa){
        let div = document.createElement("div");
        div.innerHTML = `
        <input id=${id} value="${id}" name="tamanho" type="checkbox" /> 
        ${tamanhos.nome} 
        ${tamanhos.tamanho} 
        `;
        id++;
       div.addEventListener("change", somarPreco);
        document.querySelector(".tamanhos").appendChild(div);
    }
}
function somarPreco(event){
    let id = event.target.id;

    if(event.target.checked){
        precoTotal += informacaoRoupa[id].preco
    }
    else {
        precoTotal -= informacaoRoupa[id].preco
    }
    
    document.querySelector("#preco").innerHTML = precoTotal.toFixed(2);
    console.log(precoTotal.toFixed(2));
}
async function inserirPagamento() {
    let cpf = document.querySelector("#cpf").value;
    let dataPag = new Date().toLocaleDateString('pt-BR');
    let descricao = document.querySelector("#descricao").value;
    
    const tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
    if (tamanhoSelecionado) {
        var tam = parseInt(tamanhoSelecionado.value);
        console.log(tam);
    } else {
        console.log("Nenhuma opção selecionada");
    }
 
    var dadosPagamento = {
        cpf: cpf,
        descricao: descricao,
        valorTotal: precoTotal,
        datacompra: dataPag,
    };

    console.log("enviando Pagamento para o back: ", dadosPagamento);

    const resposta = await fetch("http://localhost:8080/pagamento",{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(dadosPagamento),
    })

    var data = await resposta.json();
    console.log(data);
     alert("Obrigada pela compra!")
}
async function historic(){
    const response = await fetch("http://localhost:8080/historico");
    const historico = await response.json();

    console.log(historico)

    var id = []
    var cpf = []
    var descricao = []
    var precototal = []
    var dataCompra = []

    for(let campo of historico){
        id.push(campo.id).toString();
        cpf.push(campo.cpf).toString();
        descricao.push(campo.descricao).toString();
        precototal.push(campo.precototal).toString();
        dataCompra.push(campo.dataCompra).toString();

    }
    console.log(id, cpf, descricao, precototal, dataCompra)
let tabelaHTML = `
  <table border="1" cellspacing="0" cellpadding="4">
    <thead>
      <tr>
        <th>ID</th>
        <th>CPF</th>
        <th>Descrição</th>
        <th>Preço Total</th>
        <th>Data Compra</th>
      </tr>
    </thead>
    <tbody>
`;

for (let i = 0; i < id.length; i++) {
  tabelaHTML += `
    <tr>
      <td>${id[i]}</td>
      <td>${cpf[i]}</td>
      <td>${descricao[i]}</td>
      <td>${precototal[i]}</td>
      <td>${dataCompra[i]}</td>
    </tr>
  `;
}

tabelaHTML += `</tbody></table>`;

Swal.fire({
  title: "Histórico de Pagamentos",
  html: tabelaHTML,
});
}
