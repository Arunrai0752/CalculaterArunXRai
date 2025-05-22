function input(char)
{
    const Result = document.getElementById("display") 
  
    
       
        if(char === "C")
        {
            Result.value = "";
        }
       else if (char === "=")
        {
         try {
             Result.value = eval(Result.value);
             } catch {
             Result.value = "Error";
             }
        }

        else
        {
            Result.value =  Result.value + char
        }

          
       
}


function deleteLast() 
{
    Result.value = Result.value.slice(0, -1);
}

function toggleSign() 
{
    if (Result.value.startsWith('-')) {
        Result.value = Result.value.substring(1);
    } else if (Result.value !== '') {
        Result.value = '-' + Result.value;
    }
}