app.factory('FriendsFactory', [function(){
    var $friendsFactory = {};

    $friendsFactory.new = function (friend){
        console.log(friend);
    };

    $friendsFactory.index = function() {
        console.log('Friends listing');
    };

    $friendsFactory.show = function(id) {
        console.log('Friend show');
    };

    $friendsFactory.edit = function(id) {
        console.log('Friend edit');
    };

    $friendsFactory.delete = function(id) {
        console.log('Friend delete');
    };

    return $friendsFactory;
}])