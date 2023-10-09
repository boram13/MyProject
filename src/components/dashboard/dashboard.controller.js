app.controller('dashboard', function ($scope) {
    $scope.title = 'Dashboard'

    $scope.switchTab = function () {

        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('fliph');
        

        console.log('clicked')
    }
    return this
});

// $(document).ready(function(){
//     $('.button-left').click(function(){
//         $('.sidebar').toggleClass('fliph');
//     });
      
//  });
 