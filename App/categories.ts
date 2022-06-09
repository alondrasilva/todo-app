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
            btnDelete.dataset.
            // guardar en eldataset el id de la categoria
            btnDelete.textContent = 'Delete'
            btnDelete.classList.add('btn-secondary')

            const btnEdit = document.createElement('a')
            btnEdit.textContent = 'Edit'
            btnEdit.classList.add('btn-edit')
            btnEdit.setAttribute('href', `./edit-category.html?id=${prop}`)

            tdBtn.appendChild(btnDelete)
            tdBtn.appendChild(btnEdit)

            tr.appendChild(tdBtn)
            tableCategoriesBody.appendChild(tr)

            // Botón Eliminar categorías
            btnDelete.addEventListener('click', deleteCategory)
        }
    })
}

const deleteCategory = async (e) => {
    e.preventDefault()

    const btn = e.target;

    // de este boton tienen que obtener el data que definieron al generar el boton.


    const deleteCategory = {
        method: 'DELETE'                  
    }
    
    await fetch(`https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/${category}.json`, deleteCategory)

    window.location.reload()

}

loadCategories()

    