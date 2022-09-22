class padre{
    nombre:string
    edad:number
    constructor(_nombre:string,_edad:number){
        this.nombre = _nombre
        this.edad = _edad
    }
    mostrarnombre():void{
        console.log(this.nombre)
    }
}
class hija extends padre{
    apellido: string
    constructor(_nombre:string,_edad:number,_apellido:string){
        super(_nombre,_edad)
        this.apellido = _apellido
    }
    mostrarnombrehijo():void{
        console.log(this.nombre)
    }
    
}
const nuevohijx = new hija('hhh',33,'ddd')
console.log(nuevohijx)
console.log(nuevohijx.mostrarnombre)