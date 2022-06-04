var formAddCategory = document.getElementById('add-category');
formAddCategory.addEventListener('submit', function (e) {
    e.preventDefault();
    var payload = {
        name: e.target.category.value
    };
    console.log(payload);
    var createCategories = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/categories.json', createCategories);
});
