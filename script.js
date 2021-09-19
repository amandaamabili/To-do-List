

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
        <label> <strong>Tarefa:</strong> ${task.description} </label> 
    </div>
    <div class="buttonDelete"> <button type="submit" id="button" onclick="removeTask(${task.id})">Excluir</button></div>
</div>`
        });
    }
}




const getId = () => (Math.random() * 10000).toString();



window.onload = function () {
    showTasks();
};

