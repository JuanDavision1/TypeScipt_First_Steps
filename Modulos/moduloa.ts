 // modulos son paqueñas porciones de coodigo, reutilizables
 // ya no solo dentor del mismo archivo sino en archivos exteriores
 //cualquier clade o interfaz se puede exportar
 //esa variable se hace exportar con el export
 export const nombre:string ='manuep'
export class persona{
    nombre:string
}
export interface humano{
    nombre:string
}
export const mostrar =(dat:string):void=>{
    console.log('mostrar')
}
class personita{
    nombre:string
    edad:number
    altura:number

    constructor(nombre,edad,altura){
        this.nombre = nombre
        this.edad = edad
        this.altura = altura

    }
   
        mostrar():void{
            console.log+(this.nombre)
        }
    }
export default personita