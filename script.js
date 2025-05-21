function addTask()
{

    const input = document.getElementById("TextArea");
    const output = document.getElementById("Task-Container");

    if(input.value === '')
        {
            alert("You Must Write Something!");
        }
        else
        {

            let li = document.createElement("li")
            li.innerHTML = input.value ;

            let Cross = document.createElement("button")
            Cross.innerHTML = "Delete";
            Cross.classList.add("Dlbutton");
            li.appendChild(Cross) ;


            output.appendChild(li)
            input.value = "";


        }
}