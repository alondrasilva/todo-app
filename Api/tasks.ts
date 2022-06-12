const formAddTask = document.getElementById('add-task')

formAddTask.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        title: e.target.title.value,
        date: e.target.date.value,
        description: e.target.description.value,  
        // hay que pensar como traerse el ID en vez de solo el nombre del usuario, en ahorradas lo resolvimos
        user: e.target.users.value,
        category: e.target.categories.value,
        status: e.target.status.value
    }

    console.log(e.target)

    const createTasks = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    
    await fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks.json', createTasks)


    window.location.reload()
})
