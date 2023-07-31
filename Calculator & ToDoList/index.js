const inputBox  = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask()
{
let task=inputBox.value;
    if(task ==='')
    {
        alert("OMG!you forget to type it seems");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = task;
        listContainer.appendChild(li);
        let box = document.createElement("span");
        box.innerHTML = "delete";
        li.appendChild(box);

    }
    inputBox.value = '';
}
listContainer.addEventListener("click", function (e){
    if(e.target.tagName ==="LI")
    {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);