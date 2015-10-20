'use strict';

eventsApp.controller('EditEventController' ,
    function EventController($scope){
        $scope.saveEvent = function(event,newEventForm){



        }


        $scope.cancelEdit = function(){
            window.location = "/EventDetails.html";

        }


    }

);