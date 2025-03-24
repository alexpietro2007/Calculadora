
const url = "http://localhost:3000/"

const resp = await fetch(url)
const retorno = await resp.json()

console.log(retorno)



