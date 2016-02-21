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
todoApp.controller('TodoListController', function() {
    console.log("TodoListController");
});
