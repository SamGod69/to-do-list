let userInput = document.getElementById('userInput');
let addTaskBtn = document.getElementById('addTaskBtn');
let tasksContainer = document.getElementById('tasksContainer');

addTaskBtn.onclick = () => {
    input = userInput.value;
    if(input != ''){
        let li = document.createElement('li');
        
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        
        deleteBtn.onclick = () => {
            tasksContainer.removeChild(li);
            saveData();
        }

        tasksContainer.appendChild(li);
        
        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(input));
        li.appendChild(deleteBtn);
    }
    userInput.value = '';
    saveData();
}
getData();

function saveData(){
    localStorage.setItem('data',tasksContainer.innerHTML);
}
function getData(){
    tasksContainer.innerHTML = localStorage.getItem('data');

    let deleteButtons = tasksContainer.querySelectorAll('button');
    deleteButtons.forEach((deleteBtn) => {
        deleteBtn.onclick = () => {
            let li = deleteBtn.parentElement;
            tasksContainer.removeChild(li);
            saveData();
        }
    })
}