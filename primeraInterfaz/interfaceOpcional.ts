interface Persona{
    altura:number
    peso:number
    //parametro opcional
    nombre?:string
}
let persona ={nombre:'juan',altura:2,peso:322}
function mostrarperosna(persona:Persona):string{
    let medidapeso = persona.altura / persona.peso
    if(persona.nombre){
        return `${persona.nombre} tiene una media de ${medidapeso}`
    }else{
        return ` media de ${medidapeso}`
    }
}
console.log(mostrarperosna(persona))