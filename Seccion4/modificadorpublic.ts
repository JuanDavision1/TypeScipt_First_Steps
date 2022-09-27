class Animal{
    public nombre:string
    public tamano:number

    public constructor(_nombre,_tamano){
        this.nombre=_nombre
        this.tamano=_tamano
    }

    public moverse():void{
        console.log('Me esoty moviendo')
    }
}
const objeto = new Animal('Serpiente',2)
objeto.nombre='Perro'
console.log(objeto)