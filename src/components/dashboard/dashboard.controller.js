app.controller('dashboard', function ($scope) {
    $scope.title = 'Dashboard'
    // insert methods
    function switchSideBar(){

        
        let sidebarleft = this;

        document.getElementByClassName('sidebar')[0].classList.add('showSideBar')
         
        }

});

