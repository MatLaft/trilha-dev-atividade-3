let scoreBoard = null; // array responsável por manter o placar.

function createScoreBoard() {
    scoreBoard = [{"Pixelito": 1000000}]
}

function addPlayer(nome,placar) {
    let validador = 0
    scoreBoard.forEach(objeto => {
        if (nome in objeto ){
            validador = 1
        }
    })
    if (validador === 0){
    let i = {}
    i[nome] = placar
    scoreBoard.push(i)
    }else {
        console.log('Jogador já cadastrado!')
    }
}

function removePlayer(jogador) {
    // Implementar
    let validador = 0
    scoreBoard.forEach(objeto => {
        if (jogador in objeto ){
            validador = 1
        }
    })
    if (validador === 1) {
        scoreBoard.forEach(objeto => {
            if (jogador in objeto ){
                scoreBoard.splice(scoreBoard.indexOf(objeto),1)
            }
        })
    }
}

function updateScore(jogador,pontuacao) {
    // Implementar
    let validador = 0
    scoreBoard.forEach(objeto => {
        if (jogador in objeto ){
            validador = 1
        }
    })
    if (validador === 1) {
        scoreBoard.forEach(objeto => {
            if (jogador in objeto ){
                for (let i in objeto){
                    if (jogador in objeto){
                        objeto[jogador] = objeto[jogador] + pontuacao
                    }
                }
            }
        })
    }else{
        console.log('Jogador ainda não cadastrado')
    }
}

function applyBonus() {
    // Implementar
    scoreBoard.forEach(objeto =>{
        for(let jogador in objeto){
            objeto[jogador] = objeto[jogador] + 50
        }
    })
}

function listScoreBoard() {
    // Implementar
    const lista_nome = []
    const lista_pontuacao = []
    scoreBoard.forEach(objeto => {
        Object.values(objeto).forEach(i=> {lista_pontuacao.push(i)})
        Object.keys(objeto).forEach(i=> {lista_nome.push(i)})
    })
    const lista_ordenada_nome = []
    const lista_ordenada_pont = []
    while(lista_ordenada_nome.length !== scoreBoard.length){
        let aux = lista_pontuacao[0]
        let index = 0
        lista_pontuacao.forEach(pont =>{
            if (pont > aux){
                aux = pont
                index = lista_pontuacao.indexOf(pont)

            }
        lista_ordenada_nome.push(lista_nome[index])
        lista_ordenada_pont.push(lista_pontuacao[index])
        lista_nome.splice(index,1)
        lista_pontuacao.splice(index,1)
        })
    }
    for(let i=0; i<scoreBoard.length;i++){
        console.log(`${i+1}. ${lista_ordenada_nome[i]} - ${lista_ordenada_pont[i]} pontos `)
    }
}


createScoreBoard();
addPlayer("Higor", 150);
addPlayer("Jefferson", 200);
addPlayer("Stephan", 111);
updateScore("Higor", 100);
removePlayer("Jefferson");
applyBonus();
listScoreBoard();
// Retorno esperado:
// 1. Higor - 250 pontos
// 2. Stephan - 111 pontos
// acredito estar errado essa soma do retorno esparado, Higor inicio:150, upddate score +100=> fica com 250,
// apply bonus+ 50=> 300, idem Stepham
//tambem, na atividade, foi pedido para iniciar o placar com o pixelito.