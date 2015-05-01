// Handles log in and log out when the commands are given
angular.module('app').factory('mvAuth', function($http, mvIdentity, $q) {
  return {
    authenticateUser: function(username, password) {
      var dd = $q.defer();
      $http.post('/login', {username:username, password:password}).then(function(response) {
      if(response.data.success) {
        mvIdentity.currentUser = response.data.user;
        dd.resolve(true);
      } else {
        dd.resolve(false);
      }
      });
      return dd.promise;
    },
    logoutUser: function() {
      var dd = $q.defer();
      $http.post('/logout', {logout: true}).then(function () {
        mvIdentity.currentUser = undefined;
       dd.resolve();
      });
      return dd.promise;
    }
  }
});
