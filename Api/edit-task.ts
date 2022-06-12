const formEdit = document.getElementById('edit-task')
const params = new URLSearchParams(window.location.search)

const task = params.get('id')

fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks/${task}.json`)
    .then(response => response.json())
    .then(data => {
        formEdit.title.value = data.title
        formEdit.date.value = data.date
        formEdit.description.value = data.description
        formEdit.users.value = data.user
        formEdit.categories.value = data.category
        formEdit.status.value = data.status
        console.log(data)
    })


formEdit.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        title: e.target.title.value,
        date: e.target.date.value,
        description: e.target.description.value,
        users: e.target.user.value,
        categories: e.target.category.value,
        status: e.target.status.value
    
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    await fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks/${task}.json`, options)

    window.location.href = window.location.pathname + "/../add-task.html"
})