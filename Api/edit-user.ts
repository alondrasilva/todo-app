const editUser = document.getElementById('edit-user')
const params = new URLSearchParams(window.location.search)

const user = params.get('id')

fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/users/${user}.json`)
    .then(response => response.json())
    .then(data => {
        editUser.username.value = data.name
        editUser.useremail.value = data.email
    })

editUser.addEventListener('submit', async (e) => {    
    e.preventDefault()

    const payload = {
        name: e.target.username.value,
        email: e.target.useremail.value
    }

    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }

    await fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/users/${user}.json`, options)
    window.location.href = window.location.pathname + "/../add-user.html"

})