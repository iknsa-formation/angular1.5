app.directive('realEmail', function() {
    var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return {
        // Si ngModel est présent
        require: '?ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // On applique le validateur seulement si angular a ajouter son validateur email
            if (ctrl && ctrl.$validators.email) {

                // Cette partie la surcharge le validateur par défaut d'angular
                ctrl.$validators.email = function(modelValue) {
                    // Retourne un booléen
                    return ctrl.$isEmpty(modelValue) || regex.test(modelValue);
                };
            }
        }
    };
});
