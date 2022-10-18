function isLeap(year:number) {
    if(year % 4== 0){
        console.log(year % 4== 0)
      if(year % 100 == 0 ){
        if(year % 400 == 0 ){
            console.log(year % 4== 0)
            return true
        }else{
            return false
        }
      }else{
        return true
      }
    }else{
      return false
    }
   
    }
   console.log( isLeap(1900))    