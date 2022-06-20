var obj1={"name":"sathish","age":5};
    
      var obj2={"name":"sathish","age":5};
    
      var a=true; 
      if((obj1).length==(obj2).length){
        for(key in obj1){
            if(obj1[key]==obj2[key]){
    
                continue;
    
            }
            else{
                b=false;
                break;
            }
        }
      }
      else{
        a=true;
      }
        console.log(a);

