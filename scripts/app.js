/**
 * @author Khalid Sookia <khalidsookia@gmail.com>
 */

/**
 * Instatiation du module todoApp. C'est ici que angular cherchera le code a exécuter
 *  pour notre application todoApp puisque c'est le nom qu'on lui a donné dans notre directive
 */
var todoApp = angular.module('todoApp', []);

/**
 * Chainage du controller au module avec le même nom qu'on lui a donné dans notre vue.
 */
todoApp.controller('TodoListController', function($scope) {
    console.log("TodoListController");

    /**
     * Instanciation du todoList avec la valeur $scope
     * L'instanciation du todoList avec le $scope n'est pas obligatoire.
     * Il est fait ici pour bien voir l'usage du $scope
     * Dans une application on utilisera plutôt le $scope directement
     */
    var todoList = $scope;

    // Ajout de la propriété todos à todoList
    // Le todos est un tableau contenant des objets todos
    todoList.todos = [
        {
            text : 'Learn javascript',
            done : false
        },
        {
            text : 'Learn angular',
            done : false
        }
    ];

    todoList.addTodo = function() {
        // On rajoute dans le tableau todoList.todos le nouveau todo avec par défaut la valeur de done à false
        todoList.todos.push({
            text: todoList.formNewTodo,
            done: false
        });
        // Ensuite on vide le champ
        todoList.formNewTodo = '';
    }

    /**
     * La fonction archive est exécuter lorsqu'on click sur le lien archive
     */
    todoList.archive = function() {
        // On récupère la liste des todos fait ou pas
        var oldTodos = todoList.todos;
        // on vide le tableau des todos
        todoList.todos = [];
        // On parcours la liste des todos qu'on avait récupérer
        angular.forEach(oldTodos, function(todo) {
            // On vérifie si le todo est fait, sinon on le met dans le tableau des todos
            if (!todo.done) todoList.todos.push(todo);
        });
    };

    /**
     * La fonction remaining qui retourne le nombre de toDo restant (pas encore fait)
     *
     * @return {integer} remaining todo
     */
    todoList.remaining = function() {
        // On initialise une variable qui contiendra le nombre de todo restant
        var count = 0;

        // On boucle sur la liste des todos
        angular.forEach(todoList.todos, function(todo) {
            // Pour chaque todo.done qui est à 0 on incrémente le compteur
            count += todo.done ? 0 : 1;
        });
        return count;
    };
});
