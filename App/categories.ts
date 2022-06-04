const tableCategories = document.getElementById('table-categories')
const tableCategoriesBody = tableCategories.querySelector('tbody')

const params = new URLSearchParams(window.location.search)

const category = params.get('id')

const loadCategories = () => {

    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/categories.json')
        .then(response => response.json())
        .then(data => {

        tableCategoriesBody.innerText = ""    

        for(const prop in data) {
            const tr = document.createElement('tr')

            for(const key in data[prop]) {
                const td = document.createElement('td')
                const text = document.createTextNode(data[prop][key])

                td.appendChild(text)
                tr.appendChild(td)
            }

            const tdBtn = document.createElement('td')
            const btnDelete = document.createElement('button')
            btnDelete.textContent = 'Delete'
            const btnEdit = document.createElement('a')
            btnEdit.textContent = 'Edit'
            btnEdit.setAttribute('href', `./edit-category.html?id=${prop}`)

            tdBtn.appendChild(btnDelete)
            tdBtn.appendChild(btnEdit)

            tr.appendChild(tdBtn)
            tableCategoriesBody.appendChild(tr)

            // Botón Eliminar categorías
            btnDelete.addEventListener('click', (e) => {
                e.preventDefault()


                console.log(prop)

                const deleteCategory = {
                    method: 'DELETE'                  
                }
                
                fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/${prop}.json`, deleteCategory)

                window.location.reload()

            })
        }
    })
}

loadCategories()

    