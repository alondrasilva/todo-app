var tableUser = document.getElementById('table-users');
var tableUserBody = document.querySelector('tbody');
var params = new URLSearchParams(window.location.search);
var user = params.get('id');
var loadUsers = function () {
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/users.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        tableUserBody.innerText = "";
        var tHead = document.createElement('thead');
        var trHead = document.createElement('tr');
        var tdHead1 = document.createElement('td');
        tdHead1.textContent = "Email";
        var tdHead2 = document.createElement('td');
        tdHead2.textContent = "Nombre";
        tableUser.appendChild(tHead);
        tHead.appendChild(trHead);
        trHead.appendChild(tdHead1);
        trHead.appendChild(tdHead2);
        var _loop_1 = function (prop) {
            var tr = document.createElement('tr');
            for (var key in data[prop]) {
                if (key != 'password') {
                    var td = document.createElement('td');
                    var text = document.createTextNode(data[prop][key]);
                    td.appendChild(text);
                    tr.appendChild(td);
                }
            }
            var tdBtn = document.createElement('td');
            var btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.classList.add('btn-secondary');
            var btnEdit = document.createElement('a');
            btnEdit.textContent = 'Edit';
            btnEdit.classList.add('btn-edit');
            btnEdit.setAttribute('href', "./edit-user.html?id=".concat(prop));
            tdBtn.appendChild(btnDelete);
            tdBtn.appendChild(btnEdit);
            tr.appendChild(tdBtn);
            tableUserBody.appendChild(tr);
            //Botón Eliminar users
            btnDelete.addEventListener('click', function (e) {
                e.preventDefault();
                console.log(prop);
                var deleteUser = {
                    method: 'DELETE'
                };
                fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/users/".concat(prop, ".json"), deleteUser);
                window.location.reload();
            });
        };
        for (var prop in data) {
            _loop_1(prop);
        }
    });
};
loadUsers();
