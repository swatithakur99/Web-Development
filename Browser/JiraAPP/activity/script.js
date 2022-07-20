var uid = new ShortUniqueId();
// varaibles
let colors = ["pink", "blue", "green", "black"];
let defaultColor = "black";
let cFilter = "";
let lock = false;
let deleteMode = false;

let input = document.querySelector(".task-input");
let mainContainer = document.querySelector(".main-container");
let colorContainer = document.querySelector(".color-group-container")
let plusContainer = document.querySelector(".add");
let crossContainer = document.querySelector(".cross-container");
let lockContainer = document.querySelector(".lock");
let unlockContainer = document.querySelector(".unlock");
// Event listner
input.addEventListener("keydown", function (e) {
    if (e.code == "Enter" && input.value) {
        // console.log("task value",input.value);
        let id = uid();
        createTask(id, input.value,true);
        input.value = "";
    }
});
colorContainer.addEventListener("click", function (e) {
    let element = e.target;
    console.log("target", element);
    if (element != colorContainer) {
        let filterButton = element.classList[1];
        filteredCard(filterButton);
    }
});
lockContainer.addEventListener("click", function (e) {
    let numberOfCards = document.querySelectorAll(".task-main>div");
    for (let i = 0; i < numberOfCards.length; i++) {
        numberOfCards[i].contentEditable = false;
    }
    lockContainer.classList.add("active");
    unlockContainer.classList.remove("active");
})
unlockContainer.addEventListener("click", function (e) {
    let numberOfCards = document.querySelectorAll(".task-main>div");
    for (let i = 0; i < numberOfCards.length; i++) {
        numberOfCards[i].contentEditable = true;
    }
    lockContainer.classList.remove("active");
    unlockContainer.classList.add("active");
})
crossContainer.addEventListener("click", function (e) {
    deleteMode = !deleteMode;
    if (deleteMode) {
        crossContainer.classList.add("active");
    } else {
        crossContainer.classList.remove("active");
    }

})

// helper
function createTask(id, task,flag) {
    let taskBox = document.createElement("div");
    taskBox.setAttribute("class", "task-box");
    mainContainer.appendChild(taskBox);
    taskBox.innerHTML =
        `<div class="task-header ${defaultColor}"></div>
            <div class="task-main">
                <h3 class="task-id">#${id}</h3>
                <div class="task-text" contenteditable ="true">${task}</div>
            </div>`;
    // add addEventListener for color
    let taskHeader = taskBox.querySelector(".task-header");
      let nextColor;
    taskHeader.addEventListener("click", function () {
        let cColor = taskHeader.classList[1];
        let idx = colors.indexOf(cColor);
        let nextIdx = (idx + 1) % 4;
        nextColor = colors[nextIdx];
        taskHeader.classList.remove(cColor);
        taskHeader.classList.add(nextColor);
        // console.log("taskcontainer", taskHeader.parentNode.children[1]);
        let idWalaElem = taskHeader.parentNode.children[1].children[0];
        let id = idWalaElem.textContent;
        id = id.split("#")[1];
        // console.log("id", id);
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString)
        // {id: "nDCn8Q", task: "ffdsjbdshf", color: "pink} , {}
        for (let i = 0; i < tasksArr.length; i++) {
            if (tasksArr[i].id == id) {
                tasksArr[i].color = nextColor;
                break;
            }
        }
        localStorage.setItem("tasks", JSON.stringify(tasksArr));

    })
    taskBox.addEventListener("click", function (e) {
        if (deleteMode == true) {
            taskBox.remove();
       localStorage.removeItem();
        }
    })
    if(flag == true){
        let tasksString = localStorage.getItem("tasks");
        let tasksArr = JSON.parse(tasksString) || [];
        let tasksObj = {
            id: id,
            color:defaultColor,
            task: task
        }
        tasksArr.push(tasksObj);
        localStorage.setItem("tasks",JSON.stringify(tasksArr));
    }
}
// filtering

function filteredCard(filterColor) {
    let allTaskCards = document.querySelectorAll(".task-box");
    if (cFilter != filterColor) {
        for (let i = 0; i < allTaskCards.length; i++) {
            // header color -> 
            let taskHeader = allTaskCards[i].querySelector(".task-header");
            let taskColor = taskHeader.classList[1];
            // console.log("taskcolor",taskColor);
            if (taskColor == filterColor) {
                // show 
                allTaskCards[i].style.display = "block"
            } else {
                // hide 
                allTaskCards[i].style.display = "none"
            }
        }
        cFilter = filterColor;
    } else {
        cFilter = "";
        for (let i = 0; i < allTaskCards.length; i++) {
            allTaskCards[i].style.display = "block"
        }
    }
}

(function () {
    // localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i++) {
        let { id, task, color } = tasks[i];
        createTask(id, task, false);
    }
})();
// localStorage.setItem("to do","hello");
// localStorage.removeItem("to do");
// localStorage.clear();