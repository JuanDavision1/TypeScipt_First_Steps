
   let  mifuncion =(dato:string):string=>{
    return dato
}
console.log(mifuncion('juan'))
//funcion generica
//T es por convencion despues del nombre de la funcion
//devolucion es generico 
//recibe dato generico
function mostrarfunciongenerica<T>(dato:T):T{
    return dato
}
const d= mostrarfunciongenerica('maaam')

console.log(mostrarfunciongenerica(33))