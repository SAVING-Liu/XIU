/**
 * Created by Administrator on 2017/2/8.
 */
angular.module("eunne")
    .component("eunneComponent",{
        templateUrl:"js/app/modules/Eunne/eunne.template.html",
        controller:["$scope", "$http",
            function($scope, $http){
                var that = this;
                /*异步请求获取数据*/
                $http.get("js/app/modules/Eunne/eunne.json").then(function(response) {
                    /*异步请求成功获取的数据，保存到控制器的reslist变量中*/
                    that.reslist = response.data;
                });
            }]
    })