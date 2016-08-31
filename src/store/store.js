 export default {
    todokey: 'todos-vuejs',

    fetch: function () {
        return JSON.parse(localStorage.getItem(this.todokey) || '[]');
    },
    save: function (todos) {
        localStorage.setItem(this.todokey, JSON.stringify(todos));
    }
};