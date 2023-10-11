app.controller('dashboard', function ($scope) {
    $scope.title = '' //here we can put a title to our controller which will be poped out in the center of the app

    $scope.switchTab = function () {

        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('fliph');


        console.log('clicked')
    }
    return this
});


//me juery angularjs
// $(document).ready(function(){
//     $('.button-left').click(function(){
//         $('.sidebar').toggleClass('fliph');
//     });
      
//  });
 