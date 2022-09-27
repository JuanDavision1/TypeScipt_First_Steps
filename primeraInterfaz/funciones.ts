interface generar{
    (nombre:string, apellido:string,edad:number):void

}
let funciongereal1:generar
funciongereal1=function(nombre:string,apellido:string,edad:number):void{
    console.log(`${nombre}con apellido ${apellido} y edad ${edad}`)
}
funciongereal1('ggg','fff',33)