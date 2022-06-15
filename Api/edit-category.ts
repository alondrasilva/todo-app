const formEdit = document.getElementById('edit-category')

const params = new URLSearchParams(window.location.search)

const category = params.get('id')

fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/${category}.json`)
    .then(response => response.json())
    .then(data => {
        formEdit.category.value = data.name
    })

formEdit.addEventListener('submit', async (e) => {
    e.preventDefault()

    const payload = {
        name: e.target.category.value
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    await fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/${category}.json`, options)

    window.location.href = window.location.pathname + "/../add-category.html"
})