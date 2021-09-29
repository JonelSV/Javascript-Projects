const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const taskToBeDone = JSON.parse(localStorage.getItem('taskToBeDone'))

if(taskToBeDone) {
    taskToBeDone.forEach(todo => addTask(todo))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTask()
})

function addTask(task) {
    let taskText = input.value

    if(task){
        taskText = task.text
    }
    console.log(taskText)

    if(taskText) {
        const taskElement = document.createElement('li')
        if(task && task.completed) {
            taskElement.classList.add('completed')
        }

        taskElement.innerText = taskText
        taskElement.addEventListener('click', () => taskElement.classList.toggle('completed'))
        taskElement.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            taskElement.remove()
        })

        todosUL.appendChild(taskElement)
        input.value= ''

        // update local storage
        updateLS()
    }
}

// function to update local storage

function updateLS() {
    tasksElement = document.querySelectorAll('li')

    const tasks = []

    tasksElement.forEach(taskElement => {
        tasks.push({
            text: taskElement.innerText,
            completed: taskElement.classList.contains('completed')
        })
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

// local storage == browser API 
// give key such as name and a particular value
// anything in local storage is save d as a string

// can store ARRAYS AND OBJECTS items in local storage but has to be in JSON format and stringified
// eg. localStorage.setItem('name', JSON.stringify(object))
// then to get, you must JSON.parse
// eg. JSON.parse(localStorage.getItem(object))
// to remove items DO  localStorage.removeItem()

