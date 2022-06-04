var tableCategories = document.getElementById('table-categories');
var tableCategoriesBody = tableCategories.querySelector('tbody');
var params = new URLSearchParams(window.location.search);
var category = params.get('id');
var loadCategories = function () {
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/categories.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        tableCategoriesBody.innerText = "";
        var _loop_1 = function (prop) {
            var tr = document.createElement('tr');
            for (var key in data[prop]) {
                var td = document.createElement('td');
                var text = document.createTextNode(data[prop][key]);
                td.appendChild(text);
                tr.appendChild(td);
            }
            var tdBtn = document.createElement('td');
            var btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            var btnEdit = document.createElement('a');
            btnEdit.textContent = 'Edit';
            btnEdit.setAttribute('href', "./edit-category.html?id=".concat(prop));
            tdBtn.appendChild(btnDelete);
            tdBtn.appendChild(btnEdit);
            tr.appendChild(tdBtn);
            tableCategoriesBody.appendChild(tr);
            // Botón Eliminar categorías
            btnDelete.addEventListener('click', function (e) {
                e.preventDefault();
                console.log(prop);
                var deleteCategory = {
                    method: 'DELETE'
                };
                fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/".concat(prop, ".json"), deleteCategory);
                window.location.reload();
            });
        };
        for (var prop in data) {
            _loop_1(prop);
        }
    });
};
loadCategories();
