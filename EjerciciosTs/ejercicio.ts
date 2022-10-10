export  function decodedValue(arreglo:string[]){
    console.log(arreglo)
    let final:number[] = []
    console.log(final)
    for (let recorrido=0 ;recorrido <=1 ; recorrido++){
      if(arreglo[recorrido] == 'Black' || arreglo[recorrido] == 'black'){
      final.push(0) 
      } if(arreglo[recorrido] == 'Brown' || arreglo[recorrido] == 'brown'){
        final.push(1)  
      } if(arreglo[recorrido] == 'Red'|| arreglo[recorrido] == 'red'){
       final.push(2) 
      } if(arreglo[recorrido] == 'Orange'|| arreglo[recorrido] == 'orange'){
      final.push(3) 
      } if(arreglo[recorrido] == 'Yellow'|| arreglo[recorrido] == 'yellow'){  
       final.push(4) 
      } if(arreglo[recorrido] == 'Green'|| arreglo[recorrido] == 'green'){
       final.push(5) 
      } if(arreglo[recorrido] == 'Blue'|| arreglo[recorrido] == 'blue'){
        final.push(6) 
      } if(arreglo[recorrido]== 'Violet'|| arreglo[recorrido] == 'violet'){
       final.push(7) 
      } if(arreglo[recorrido] == 'Grey'|| arreglo[recorrido] == 'grey'){
        final.push(8) 
      } if(arreglo[recorrido] == 'White'|| arreglo[recorrido] == 'white'){
       final.push(9) 
      }   
      console.log(recorrido)
      console.log(final)
  }
  return parseInt(final.join(''))
  }