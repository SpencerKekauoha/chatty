'use strict';

angular.module('chattyApp')
  .factory('messageService', function ( $http ) {
    return {
      getMessages: function () {
        return $http.get('http://localhost:8000');
      },

      addMessage: function ( message, newUser ) {
        return $http.post('http://localhost:8000', { message: message, user: newUser });
      }
    };



  });
