'use strict';

angular.module('tilesApp')
    .service('tilesService', ['$http', '$q', function ($http, $q) {

        this.getData = function (start, end) {
            var deferred = $q.defer();

            $http.get('/cars')
            .success(function (data) {
                var response = {
                  data : data.slice(start || 0, end),
                  meta : {
                    totalItems : data.length,
                    start : start,
                    end : end
                  }
                }
                deferred.resolve(response);
            })
            .error(function () {});
            return deferred.promise;
        }
    }]);
