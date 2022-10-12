 function decodedResistorValue(arre) {
    let newarre:number[]=[]
    let reserva:number 
    let condicion:number = 0
    do{
        
        for (let item:number =0 ; item <= arre.length-1 ; item++){
         if(arre[item]=="black"){
            if(item == arre.length-1){
             reserva=0
             for (let int:number=0 ; int <reserva ;int ++){
                newarre.push(0)
             }
           }else{
               newarre.push(0)
           }
       }else if(arre[item]=="brown"){
        if(item == arre.length-1){
            reserva=1
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(1)
          }
       }else if(arre[item]=="red"){
        if(item == arre.length-1){
            reserva=2
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(2)
          }
       }else if(arre[item]=="orange"){
        if(item == arre.length-1){
            reserva=3
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(3)
          }
       }else if(arre[item]=="yellow"){
        if(item == arre.length-1){
            reserva=4
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(4)
          }
       }else if(arre[item]=="green"){
        if(item == arre.length-1){
            reserva=5
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(5)
          }
       }else if(arre[item]=="blue"){
        if(item == arre.length-1){
            reserva=6
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(6)
          }
       }else if(arre[item]=="violet"){
        if(item == arre.length-1){
            reserva=7
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(7)
          }
       }else if(arre[item]=="grey"){
        if(item == arre.length-1){
            reserva=8
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(8)
          }
       }else if(arre[item]=="white"){
        if(item == arre.length-1){
            reserva=9
            for (let int:number=0 ; int <reserva ;int ++){
               newarre.push(0)
            }
          }else{
              newarre.push(9)
          }
       }
        }
        condicion ++
     }while(condicion == 2)
     let contador_ceros = newarre.filter(function(value){return value == 0})
        if ((contador_ceros.length % 2== 0 && contador_ceros.length !== 1)){
            for(let item = 0 ;item < contador_ceros.length-1 ; item ++){
                newarre.pop()
            }
          
        }else if((contador_ceros.length % 2 != 0 && contador_ceros.length !== 1)){
            for(let item = 0 ;item <= contador_ceros.length-1 ; item ++){
                newarre.pop()
            }
           
        }else{
            newarre = newarre
        }
            if(contador_ceros.length < 3){
                return newarre.join('')+' '+ 'ohms'
            }else{
                return newarre.join('')+' '+ 'kiloohms'
            }
  
  
  }

 console.log( decodedResistorValue(['orange', 'orange', 'black']))