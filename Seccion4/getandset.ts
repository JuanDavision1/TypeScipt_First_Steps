let permiso:boolean = true
class persona{
    public nombre:string

    constructor(nombre:string){
        this.nombre=nombre

    }
    get getnombre():string{
        return this.nombre
    }
    set setnombre(nombre:string){
        if(permiso){
            this.nombre= nombre
        }else{
            console.log('NO tienes  permisos para esto')
        }
    
    }
}
const objeto = new persona('Manuel')
objeto.setnombre='Perro'
console.log(objeto.getnombre)