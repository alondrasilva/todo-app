const formAddCategory = document.getElementById('add-category')

formAddCategory.addEventListener('submit', (e) => {
    e.preventDefault()

    const payload = {
        name: e.target.category.value
    }

    console.log(payload)

    const createCategories = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }
    
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/categories.json', createCategories)

    // window.location.reload()

    loadCategories()
})




