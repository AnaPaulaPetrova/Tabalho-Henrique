var informacaoRoupa = {};
var precoTotal = 0.0;

async function getRoupa(idRoupa) {
    const resposta = await fetch("http://localhost:8080/roupa/" + idRoupa);
    const data = await resposta.json();

    console.log(data.roupa);
    informacaoRoupa = data.roupa;

    renderTamanhos();
}
function renderTamanhos() {
    document.querySelector(".tamanhos").innerHTML = "";
    let id = 0;

    for (let tamanhos of informacaoRoupa){
        let div = document.createElement("div");
        div.innerHTML = `
        <input id=${id} type="checkbox" /> ${tamanhos.nome} ${tamanhos.tamanho} (R$ ${tamanhos.preco})`;
        id++;
       div.addEventListener("change", somarPreco)
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
    
     console.log("cpf:", cpf);
     console.log("precoTotal:", precoTotal);
     console.log("dataPagamento:", dataPag);

    var dadosPagamento = {
        cpf: cpf,
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
}