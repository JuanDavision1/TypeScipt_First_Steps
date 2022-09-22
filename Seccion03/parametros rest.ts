//pasar varios parametros 
const cartapostres =(postre:string,...frutas:string[]):void=>{
console.log(`el postre es ${postre} y tiene ${frutas}`)
}
cartapostres('postre1','ttt','tttt','treee')
