app.factory('FriendsFactory', [function(){
    var $friendsFactory = {};

    $friendsFactory.new = function (friend){
        console.log(friend);
    };

    return $friendsFactory;
}])