app.factory('FriendsFactory', [function(){
    var $friendsFactory = {};

    var defaultFriends = [
        {name: 'Khalid Sookia', email: 'khalid.sookia@iknsa.com', tel: '0782182189', age: 30},
        {name: 'Khalid Sookia', email: 'khalid.sookia@iknsa.com', tel: '0782182189', age: 30}
    ];

    $friendsFactory.index = function() {

        var savedFriends = localStorage.getItem('friends');

        var friends = (savedFriends !== null) ? JSON.parse(savedFriends) : JSON.parse(defaultFriends);
        localStorage.setItem('friends', JSON.stringify(friends));

        return friends;
    };

    $friendsFactory.new = function (friend){

        var friends = $friendsFactory.index();

        friends.push(friend);
        localStorage.setItem('friends', JSON.stringify(friends));

        console.log(friends);
    };

    $friendsFactory.show = function(id) {

        var friends = $friendsFactory.index();

        console.log(friends[id]);
    };

    return $friendsFactory;
}])