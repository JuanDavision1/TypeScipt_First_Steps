class Animal1{
    //Definirla ya sea prvada o publica
    private nombre:string
    public tamano:number
    //privado se accede desde la clase no afuera
    public constructor(_nombre,_tamano){
        this.nombre=_nombre
        this.tamano=_tamano
    }

    public moverse():void{
        console.log('Me esoty moviendo')
    }
}

const objetoo = new Animal1('ttt',33)
console.log(objetoo)
