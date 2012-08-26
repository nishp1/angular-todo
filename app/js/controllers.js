'use strict';

/* Controllers */

function TodoCtrl ($scope) {

    $scope.todos = [
        { text: 'learn angular', done: false },
        { text: 'eat more', done: false },
        { text: 'build awesome apps', done: false }
    ];

    $scope.getTotalTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        if(!$scope.formTodoText) return;
        
        $scope.todos.push({
            text: $scope.formTodoText,
            done: false
        });

        $scope.formTodoText = "";
    };

    $scope.clearCompleted = function () {
        var todo, todos = [];

        for (var i = 0, len = $scope.todos.length; i < len; i++) {
            todo = $scope.todos[i];
            !todo.done && todos.push(todo);
        }

        $scope.todos = todos;
    };

}