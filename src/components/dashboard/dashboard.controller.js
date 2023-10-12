app.controller('dashboard', function ($scope) {
    $scope.title = '' //here we can put a title to our controller which will be poped out in the center of the app

    $scope.switchTab = function () {

        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('fliph');


        console.log('clicked')
    }
    
    $scope.getInput = function (str1, str2, nr1){
        let output;
        output  = str1 + " " + str2 + " " + nr1;
        return output;
    }

    $scope.getOptionalParameters = function() {
            
        let userName = document.getElementById("selectedParameter")
        let userLAstName = document.getElementById("selectedParameter")
        let userAge = operatorElement.value;

        const selected = { 
            usName: userName,
            usLastName: userLAstName.options[operatorElement.selectedIndex].textstName,
            usAge: userAge
        }
        return selected;
    }

    $scope.printUserInfo = function() {
   
        const s1 = document.getElementById(str1).value
        const s2 = document.getElementById(str2).value
        const N1 = document.getElementById(nr1).value
        //convert string to number
        let str1= String(s1);
        let str2 = String(s2);
        let nr1 = Number(N1);


        // find operatorText

        if ((s1 == null || s1 == '') || (s2 == null || s2 == '')|| (N1== null || N1 == '')){
            alert("Plotesoni hapesirat qe Submit  te kryhet")
            return
        }
        let selectParameters = getOptionalParameters();
        output = getInput(s1, s2, N1);

        document.getElementById('total_information').innerHTML = "This user information is:" + selectParameters.usNam  + " " + selectParameters.usLastName + " " + selectParameters.usAge + " ";

    }

    
});


//me juery angularjs
// $(document).ready(function(){
//     $('.button-left').click(function(){
//         $('.sidebar').toggleClass('fliph');
//     });
      
//  });
 