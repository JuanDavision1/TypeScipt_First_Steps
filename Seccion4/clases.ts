class vehiculo{
    marca:string
    color:string
    puertas:number

    constructor(marca_:string,color_:string,puertas_:number){
        this.marca = marca_
        this.color = color_
        this.puertas=puertas_
    }
    acelerar():string{
       return this.color
    }
    frenar():void{
        console.log('ojo de freno')

    }
}

const coche = new vehiculo('gg','tt',3)
console.log(coche)
console.log(coche.acelerar())