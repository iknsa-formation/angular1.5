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
});
