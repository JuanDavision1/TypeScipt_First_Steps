//parametros por defectó
const mostrare = (nombre:string, apellido:string,edad:number = 32)=>{
    return `Se llama ${nombre} se apellida ${apellido} y tiene ${edad}`
}

console.log(mostrare('maune','nsns',44))
console.log(mostrare('mrr','nsns'))

