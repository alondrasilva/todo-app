const tableCategories = document.getElementById('table-categories')
const tableCategoriesBody = tableCategories.querySelector('tbody')


const loadCategories = () =>{

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
        }
        
    })
}

loadCategories()

    