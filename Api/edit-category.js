var formEdit = document.getElementById('edit-category');
var params = new URLSearchParams(window.location.search);
var category = params.get('id');
fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/".concat(category, ".json"))
    .then(function (response) { return response.json(); })
    .then(function (data) {
    formEdit.category.value = data.name;
});
formEdit.addEventListener('submit', function (e) {
    e.preventDefault();
    var payload = {
        name: e.target.category.value
    };
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/".concat(category, ".json"), options);
});
