var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var selectUsers = document.getElementById('users');
var loadUsersSelect = function () {
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/users.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var users in data) {
            for (var name_1 in data[users]) {
                if (name_1 === 'name') {
                    var option = document.createElement('option');
                    option.textContent = data[users][name_1];
                    selectUsers.appendChild(option);
                }
            }
        }
    });
};
loadUsersSelect();
// const params = new URLSearchParams(window.location.search)
var selectCategory = document.getElementById('categories');
var loadCategoriesSelect = function () {
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/categories.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        for (var category in data) {
            // params.set('idCategory', `${category}`)
            for (var name_2 in data[category]) {
                var option = document.createElement('option');
                option.textContent = data[category][name_2];
                selectCategory.appendChild(option);
            }
        }
    });
};
loadCategoriesSelect();
var divPending = document.getElementById('pending');
var divDoing = document.getElementById('doing');
var divDone = document.getElementById('done');
var loadTasks = function () {
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var _loop_1 = function (prop) {
            var card = document.createElement('div');
            card.classList.add('card-task');
            for (var key in data[prop]) {
                if (key == 'title') {
                    var h6 = document.createElement('p');
                    var text = document.createTextNode("Title: ".concat(data[prop][key]));
                    card.appendChild(h6);
                    h6.appendChild(text);
                }
                else if (key != 'title' && key != 'status') {
                    var p = document.createElement('p');
                    var textP = document.createTextNode("".concat(key, ": ") + data[prop][key]);
                    card.appendChild(p);
                    p.appendChild(textP);
                }
                else if (key == 'status') {
                    if (data[prop][key] == 'pending') {
                        // const p2 = document.createElement('p')
                        // const textP2 = document.createTextNode(data[prop][key])
                        // card.appendChild(p2)
                        // p2.appendChild(textP2)
                        divPending.appendChild(card);
                    }
                    else if (data[prop][key] == 'doing') {
                        // const p2 = document.createElement('p')
                        // const textP2 = document.createTextNode(data[prop][key])
                        // card.appendChild(p2)
                        // p2.appendChild(textP2)
                        divDoing.appendChild(card);
                    }
                    else if (data[prop][key] == 'done') {
                        // const p2 = document.createElement('p')
                        // const textP2 = document.createTextNode(data[prop][key])
                        // card.appendChild(p2)
                        // p2.appendChild(textP2)
                        divDone.appendChild(card);
                    }
                }
            } // for
            var buttons = document.createElement('div');
            buttons.classList.add('buttons-card');
            var btnDelete = document.createElement('button');
            btnDelete.textContent = 'Delete';
            btnDelete.classList.add('btn-secondary');
            var btnEdit = document.createElement('a');
            btnEdit.textContent = 'Edit';
            btnEdit.classList.add('btn-edit');
            btnEdit.setAttribute('href', "./edit-task.html?idTask=".concat(prop));
            buttons.appendChild(btnDelete);
            buttons.appendChild(btnEdit);
            card.appendChild(buttons);
            // divPending.appendChild(card)
            btnDelete.addEventListener('click', function (e) { return __awaiter(_this, void 0, void 0, function () {
                var deleteTask;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            e.preventDefault();
                            deleteTask = {
                                method: 'DELETE'
                            };
                            return [4 /*yield*/, fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/tasks/".concat(prop, ".json"), deleteTask)];
                        case 1:
                            _a.sent();
                            window.location.reload();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        for (var prop in data) {
            _loop_1(prop);
        } // for
    }); // data
};
loadTasks();
