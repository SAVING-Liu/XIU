/**
 * Created by Administrator on 2017/2/8.
 */
angular.module("lavidione")
    .component("lavidioneComponent",{
        templateUrl:"js/app/modules/lavidione/lavidione.template.html",
        controller:["$scope", "$http",
            function($scope, $http){
                var that = this;
                /*异步请求获取数据*/
                $http.get("js/app/modules/lavidione/lavidione.json").then(function(response) {
                    /*异步请求成功获取的数据，保存到控制器的reslist变量中*/
                    that.reslist = response.data;
                });
            }]
    })