 function toRna(entrada:string):string {
    let arre:string[] = entrada.split('')
      for (let index in arre){
        if(arre[index] =='G'){
          arre[index]='C' 
        }else if(arre[index] =='C'){
          arre[index]='G'
        }else if(arre[index] =='T'){
          arre[index]='A'
        }else if(arre[index] =='A'){
          arre[index]='U'  
      }else{
        arre[index]=''
      }
        
      }
       if(arre.join('').length  == entrada.split('').length){
         return arre.join('')
       }else{
        console.log("Invalid input DNA.")
         throw  "Invalid input DNA."
       }
  
  }

 console.log(toRna('ACGTXXXCTTAA'))