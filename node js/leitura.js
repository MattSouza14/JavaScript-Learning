const fs = require('fs')

const caminho = 'nodeJS/textos'
const nomeArquivo = 'texto.txt'
const codificacao = 'utf-8'

fs.readFile(` ${caminho}/${nomeArquivo}`, codificacao, (err, conteudo) => {
	// if (err) throw err
	console.log(conteudo)
})



