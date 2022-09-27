//interface es una clase abstracta
interface Persona{
    //Atributos
    nombre:string
    //metodos
    
}

let caminar =(perosna:Persona):void=>{
console.log('la persona'+ perosna.nombre +'Esta caminando')
}

let nuevapersona ={nombre:'Nsnsn',apellido:'ddd'}
caminar(nuevapersona)