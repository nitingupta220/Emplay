var app = angular.module("emplay", []);

app.controller("emplayController", ["$scope", "$http", "$timeout", "$interval", function ($scope, $http, $timeout, $interval) {

    'use strict';


    //    $scope.callAtInterval = function () {
    //
    //        $http.get("https://api.github.com/search/repositories?q=" + $scope.searchText)
    //
    //            .then(function (response) {
    //                $scope.mydata = response.data;
    //            });
    //
    //    };
    //    $interval(function () {
    //        if ($scope.searchText != undefined) {
    //            $scope.callAtInterval();
    //        }
    //
    //    }, 5000);

    //    $scope.$watch("searchText", function (newVal, oldVal) {
    //        if (newVal !== oldVal) {
    //            $http.get("https://api.github.com/search/repositories?q=" + $scope.searchText)
    //
    //                .then(function (response) {
    //                    $scope.mydata = response.data;
    //                });
    //        }
    //    })
    $scope.inputChanged = function () {
        $http.get("https://api.github.com/search/repositories?q=" + $scope.searchText)
            .then(function (response) {
                $scope.mydata = response.data;
            });
    }

}]);
