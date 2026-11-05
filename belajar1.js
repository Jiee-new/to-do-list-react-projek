const inputTask = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const taskList = document.querySelector("#taskList");

const deleteButtons = document.querySelectorAll(".task-item button");
deleteButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        button.parentElement.remove();
    });
});

function addTask() {
    const task = inputTask.value;
    if (task.trim() === "") {
        alert("Task tidak boleh kosong!");
        return;
    }
    const li = document.createElement("li");
    li.classList.add("task-item");
    li.textContent = task;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
        li.remove();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    inputTask.value = "";
}
addButton.addEventListener("click", addTask);