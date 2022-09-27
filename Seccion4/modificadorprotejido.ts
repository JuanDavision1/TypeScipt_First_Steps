class Padre{
    protected nombre:string

    public constructor(_nombre:string){
        this.nombre=_nombre
    }

}

class hijo extends Padre{
    public apellido:string

    constructor(nombre_:string,apellido_:string){
        super(nombre_)
    }
    mostrarNombre():void{
        console.log(this.nombre)
    }
}

const obj = new hijo('Manuel','Muñoz')
