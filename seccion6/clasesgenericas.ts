class Persona<T>{
    //clase generica
    nombre:string
    edad:T
     mostrar:(dato:T)=>T
}

const obj = new Persona()
