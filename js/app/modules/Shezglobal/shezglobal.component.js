/**
 * Created by Administrator on 2017/2/8.
 */
angular.module("shezglobal")
    .component("shezglobalComponent",{
        templateUrl:"js/app/modules/Shezglobal/shezglobal.template.html",
        controller:["$scope", "$http",
            function($scope, $http){
                var that = this;
                /*异步请求获取数据*/
                $http.get("js/app/modules/Shezglobal/shezglobal.json").then(function(response) {
                    /*异步请求成功获取的数据，保存到控制器的reslist变量中*/
                    that.reslist = response.data;
                });
            }]
    })