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
var tableCategories = document.getElementById('table-categories');
var tableCategoriesBody = tableCategories.querySelector('tbody');
var params = new URLSearchParams(window.location.search);
var category = params.get('id');
var loadCategories = function () {
    fetch('https://todo-app-fae2a-default-rtdb.firebaseio.com/categories.json')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        tableCategoriesBody.innerText = "";
        var tHead = document.createElement('thead');
        var trHead = document.createElement('tr');
        var tdHead1 = document.createElement('td');
        tdHead1.textContent = "Category";
        tableCategories.appendChild(tHead);
        tHead.appendChild(trHead);
        trHead.appendChild(tdHead1);
        for (var prop in data) {
            var tr = document.createElement('tr');
            for (var key in data[prop]) {
                var td = document.createElement('td');
                var text = document.createTextNode(data[prop][key]);
                td.appendChild(text);
                tr.appendChild(td);
                var tdBtn = document.createElement('td');
                var btnDelete = document.createElement('button');
                btnDelete.dataset.categoryid = "".concat(prop);
                btnDelete.textContent = 'Delete';
                btnDelete.classList.add('btn-secondary');
                var btnEdit = document.createElement('a');
                btnEdit.textContent = 'Edit';
                btnEdit.classList.add('btn-edit');
                btnEdit.setAttribute('href', "./edit-category.html?id=".concat(prop));
                tdBtn.appendChild(btnDelete);
                tdBtn.appendChild(btnEdit);
                tr.appendChild(tdBtn);
                tableCategoriesBody.appendChild(tr);
                // Bot??n Eliminar categor??as
                btnDelete.addEventListener('click', deleteCategory);
            }
        }
    });
};
var deleteCategory = function (e) { return __awaiter(_this, void 0, void 0, function () {
    var id, deleteCategory;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e.preventDefault();
                id = e.target.getAttribute("data-categoryid");
                console.log(e.target.getAttribute("data-categoryid"));
                deleteCategory = {
                    method: 'DELETE'
                };
                return [4 /*yield*/, fetch("https://todo-app-fae2a-default-rtdb.firebaseio.com/categories/".concat(id, ".json"), deleteCategory)];
            case 1:
                _a.sent();
                window.location.reload();
                return [2 /*return*/];
        }
    });
}); };
loadCategories();
