const formAddUsers = document.getElementById('add-user')

formAddUsers.addEventListener('submit', (e) => {
    e.preventDefault()

    const payload = {
        name: e.target.username.value,
        email: e.target.useremail.value,
        password: e.target.userpass.value,
    }

    console.log(payload)

    const createUsers = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/users.json', createUsers)

    loadUsers()
})
