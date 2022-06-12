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

                for(const name in data[category]) {
                        const option = document.createElement('option')
                        option.textContent = data[category][name]
    
                        selectCategory.appendChild(option)
                }
            }   
    })
}

loadCategoriesSelect()














const divPending = document.getElementById('pending')
const divDoing = document.getElementById('doing')
const divDone = document.getElementById('done')

const loadTasks = () => {

    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks.json')
        .then(response => response.json())
        .then(data => {

            console.log(data)

        for(const prop in data) {

            const card = document.createElement('div')
            card.classList.add('card-task')

            for(const key in data[prop]) {

                if (key == 'title') {

                    const h6 = document.createElement('h6')
                    const text = document.createTextNode(`Title: ${data[prop][key]}`)
        
                    card.appendChild(h6)
                    h6.appendChild(text)

                } else if (key != 'title' && key != 'status') {
                    const p = document.createElement('p')
                    const textP = document.createTextNode(data[prop][key])

                    card.appendChild(p)
                    p.appendChild(textP)
            
                } else if (key == 'status') {
                        if (data[prop][key] == 'pending') {
                            const p2 = document.createElement('p')
                            const textP2 = document.createTextNode(data[prop][key])

                            card.appendChild(p2)
                            p2.appendChild(textP2)
                            divPending.appendChild(card)
                    
                        } else if (data[prop][key] == 'doing') {
                            const p2 = document.createElement('p')
                            const textP2 = document.createTextNode(data[prop][key])

                            card.appendChild(p2)
                            p2.appendChild(textP2)
                            divDoing.appendChild(card)

                        } else if(data[prop][key] == 'done') {
                            const p2 = document.createElement('p')
                            const textP2 = document.createTextNode(data[prop][key])

                            card.appendChild(p2)
                            p2.appendChild(textP2)
                            divDone.appendChild(card)

                        }
                    }
                

            } // for
                const buttons = document.createElement('div')
                buttons.classList.add('buttons-card')

                const btnDelete = document.createElement('button')
                btnDelete.textContent = 'Delete'
                btnDelete.classList.add('btn-secondary')
    
                const btnEdit = document.createElement('a')
                btnEdit.textContent = 'Edit'
                btnEdit.classList.add('btn-edit')
                btnEdit.setAttribute('href', `./edit-task.html?id=${prop}`)
    
                buttons.appendChild(btnDelete)
                buttons.appendChild(btnEdit)
    
                card.appendChild(buttons)
                // divPending.appendChild(card)

                btnDelete.addEventListener('click', async (e) => {
                    e.preventDefault()

                    // console.log(prop)

                    const deleteTask = {
                        method: 'DELETE'                  
                    }
                    
                    await fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks/${prop}.json`, deleteTask)

                    window.location.reload()


                })
        } // for
 
    }) // data
}

loadTasks()
