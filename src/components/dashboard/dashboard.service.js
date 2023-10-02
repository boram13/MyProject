app.factory('webservice', function ($http) {
    var obj = {};
    var url = "http://replace.me/api/v1/"

    obj.applicationData = function () {
        return $http.get(url + 'applications/?format=json');
    }

    return obj;
});
