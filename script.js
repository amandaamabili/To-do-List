/*  const listForm = document.querySelector("#listForm"); */

let listArray = JSON.parse(localStorage.getItem("list")) || [];

const taskAddButton = document.querySelector("#taskAddButton")

const submit = () => {
    const taskInput = document.getElementById("taskInput").value;

    const task = {
        id: getId(),
        description: taskInput
    }

    listArray.push(task)
    localStorage.setItem("list", JSON.stringify(listArray));
    showTasks(true);

}

const removeTask = id => {
    let taskToKeep =  listArray.filter( task => task.id !==  id.toString());
    listArray = taskToKeep;
    localStorage.setItem("list", JSON.stringify(taskToKeep));
    showTasks(true)
}


const showTasks = (clearTask = false) => {

    const listContent = document.querySelector('.content');


    if (clearTask) {
        listContent.innerHTML = '';
    }


    if (listArray.length > 0) {
        listArray.forEach((task) => {
            listContent.innerHTML =
                listContent.innerHTML + `
    <div class="taskItem">
    <div class="checkbox"><input type="checkbox" >
        <label> Tarefa: ${task.description} </label> 
    </div>
    <div class="buttonDelete"> <button type="submit" onclick="removeTask(${task.id})">X</button></div>
</div>`
        });
    }
}

//passos
// criar função para o botão deletar passando o id
// filter pelo Id e remover objeto do array 
//salvar array no localstorage
// salvar o local storage
// atualizar a página



const getId = () => (Math.random() * 10000).toString();


//style="text-decoration: line-through"

window.onload = function () {
    showTasks();
};

