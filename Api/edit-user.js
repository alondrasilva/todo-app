var editUser = document.getElementById('edit-user');
var params = new URLSearchParams(window.location.search);
var user = params.get('id');
fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/users/".concat(user, ".json"))
    .then(function (response) { return response.json(); })
    .then(function (data) {
    editUser.username.value = data.name;
    editUser.useremail.value = data.email;
});
editUser.addEventListener('submit', function (e) {
    e.preventDefault();
    var payload = {
        name: e.target.username.value,
        email: e.target.useremail.value
    };
    var options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    };
    fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/users/".concat(user, ".json"), options);
});
