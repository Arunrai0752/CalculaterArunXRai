function input(char)
{
    const Result = document.getElementById("display") 
  
    
       
        if(char === "C")
        {
            Result.value = "";
        }
        else if(char === "=")
        {
            const total = eval(Result.value)
            Result.value = total
            console.log(total);
            
        }
        else
        {
            Result.value =  Result.value + char
        }

       
       
}