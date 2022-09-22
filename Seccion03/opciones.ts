//parametros que se pueden o no tener
//poner un signo de interrogacion antes de la variable le dira a js que esa var es opcional
const opcionales =(nombre:string , apellido: string,edad?:number):void =>{
    if(edad){
        console.log(`Se llama ${nombre}, su apellido ${apellido} y su edad es ${edad}`)

    }else{
        console.log(`Se llama ${nombre}, su apellido ${apellido} `)

    }

}

opcionales('Juan','perez')