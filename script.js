function busca() {
    fetch('dados.json')
        .then(response => response.json())
        .then(dadinhos =>{
            tablet = document.getElementById('place');

            dadinhos.forEach(pessoinha => {
                let linha = document.createElement('tr');

                linha.innerHTML =
                "<td>" + jogador.nome + "</td>" + 
                "<td>" + jogador.profissão + "</td>" +
                "<td>" + jogador.posição + "</td>";
                "<td>" + jogador.peso + "</td>" +
                "<td>" + jogador.idade + "</td>";
                tablet.appendChild(linha);
            });
        })
}