let inputTask = document.querySelector(".add-task");
let plusBtn = document.querySelector(".plus");
let taskDiv = document.querySelector(".tasks");
let Task = "";
function addingTask() {
    taskDiv.innerHTML = taskDiv.innerHTML + `<div class="task-card">
            <div class="task-name">${Task}</div>
            <div class="buttons">
                <div class="tick-box"><img class="tick-svg" id = "tick" src="assets/checkbox-svgrepo-com.svg" alt="" width="20px"></div>
                <div class="delete"><img class="delete-svg" src="assets/delete-svgrepo-com.svg" width="30px" alt="unchecked"></div>
            </div>
        </div>`}

function main() {
    inputTask.addEventListener("keydown", async (event) => {
        if (event.key === 'Enter') {
            if (inputTask.value.trim() === "") return alert("Please write some task"); 
            inputTask.select();
            Task = inputTask.value;
            inputTask.value = "";
            addingTask();
        }
    })
    plusBtn.addEventListener("click", async (event) => {
        if (event) {
            if (inputTask.value.trim() === "") return alert("Please write some task"); 
            inputTask.select();
            Task = inputTask.value;
            inputTask.value = "";
            addingTask();
        }
    })

    document.addEventListener('click', function (event) {
        if (event.target && event.target.matches('.delete-svg')){
            const deleteImg = event.target;
            const taskCard = deleteImg.closest(".task-card");
            const taskName = taskCard.querySelector(".task-name") 
            if (deleteImg.src.includes("assets/delete-svgrepo-com.svg")) {
                console.log("eh");
                taskCard.remove();
                
            }
        }

        if (event.target && event.target.matches('.tick-svg')) {

            const tickImg = event.target;
            const taskCard = tickImg.closest(".task-card");
            const taskName = taskCard.querySelector(".task-name") 
            if (tickImg.src.includes("assets/checkbox-svgrepo-com.svg")) {
                tickImg.src = "assets/checkbox-checked-filled-svgrepo-com.svg";
                taskName.style.opacity = "0.5";
                taskName.style.textDecoration = "line-through";
                
            }
            else if (tickImg.src.includes("assets/checkbox-checked-filled-svgrepo-com.svg")) {
                tickImg.src = "assets/checkbox-svgrepo-com.svg"
                taskName.style.opacity = "1";
                taskName.style.color = "black";
                taskName.style.textDecoration = "none";
            }
        }
    });

}

main();