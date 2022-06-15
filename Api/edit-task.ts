const formEdit = document.getElementById('edit-task')

const selectUsers = document.getElementById('users')

const loadUsersSelect = () => {

    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/users.json')
        .then(response => response.json())
        .then(data => {
           
            for(const users in data) {

                for(const name in data[users]) {
                    if (name === 'name'){
                        const option = document.createElement('option')
                        option.textContent = data[users][name]
                        option.setAttribute('value', `${data[users][name]}`)
    
                        selectUsers.appendChild(option)
                    } 
                }
            }   
    })
}

loadUsersSelect()

const selectCategory = document.getElementById('categories')

const loadCategoriesSelect = () => {

    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/categories.json')
        .then(response => response.json())
        .then(data => {
           
            for(const category in data) {
                // params.set('idCategory', `${category}`)

                for(const name in data[category]) {
                        const option = document.createElement('option')
                        option.textContent = data[category][name]
    
                        selectCategory.appendChild(option)
                }
            }   
    })
}

loadCategoriesSelect()

const params = new URLSearchParams(window.location.search)

const task = params.get('idTask')

fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks/${task}.json`)
    .then(response => response.json())
    .then(data => {
        formEdit.title.value = data.title;
        formEdit.date.value = data.date;
        formEdit.description.value = data.description;
        formEdit.users.value = data.user;
        formEdit.categories.value = data.categoryId;
        formEdit.status.value = data.status;
        console.log(data)
    })


formEdit.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        title: e.target.title.value,
        date: e.target.date.value,
        description: e.target.description.value,
        user: e.target.users.value,
        categoryId: e.target.categories.value,
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