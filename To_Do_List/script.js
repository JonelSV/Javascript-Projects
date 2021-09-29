const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

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
    }
}