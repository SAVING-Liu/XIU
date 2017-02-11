/**
 * Created by Administrator on 2017/2/11.
 */
angular.module("r_right")
    .component("rightComponent",{
        templateUrl:"js/app/modules/d_right/r_right.template.html",
        controller:["$scope", "$http",
            function($scope, $http){
                var that = this;
                /*异步请求获取数据*/
                $http.get("js/app/modules/d_right/r_right.json").then(function(response) {
                    /*异步请求成功获取的数据，保存到控制器的reslist变量中*/
                    that.reslist = response.data;
                });
            }]
    })