const tableUser = document.getElementById('table-users')
const tableUserBody = document.querySelector('tbody')

// const params = new URLSearchParams(window.location.search)

// const user = params.get('id')

const loadUsers = () => {

    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/users.json')
        .then(response => response.json())
        .then(data => {

        tableUserBody.innerText = ""    

        const tHead = document.createElement('thead')
        const trHead = document.createElement('tr')
        const tdHead1 = document.createElement('td')
        tdHead1.textContent = "Email"
        const tdHead2 = document.createElement('td')
        tdHead2.textContent = "Nombre"

        tableUser.appendChild(tHead)
        tHead.appendChild(trHead)
        trHead.appendChild(tdHead1)
        trHead.appendChild(tdHead2)

        for(const prop in data) {
            const tr = document.createElement('tr')

            for(const key in data[prop]) {

                if (key != 'password') {

                    const td = document.createElement('td')
                    const text = document.createTextNode(data[prop][key])
    
                    td.appendChild(text)
                    tr.appendChild(td)

                }

            }

            const tdBtn = document.createElement('td')
            const btnDelete = document.createElement('button')
            btnDelete.textContent = 'Delete'
            btnDelete.classList.add('btn-secondary')

            const btnEdit = document.createElement('a')
            btnEdit.textContent = 'Edit'
            btnEdit.classList.add('btn-edit')
            btnEdit.setAttribute('href', `./edit-user.html?id=${prop}`)

            tdBtn.appendChild(btnDelete)
            tdBtn.appendChild(btnEdit)

            tr.appendChild(tdBtn)
            tableUserBody.appendChild(tr)

            //Botón Eliminar users
            btnDelete.addEventListener('click', async (e) => {
                e.preventDefault()

                // console.log(prop)

                const deleteUser = {
                    method: 'DELETE'                  
                }
                
                await fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/users/${prop}.json`, deleteUser)

                window.location.reload()


            })
        }
    })
}

loadUsers()

    