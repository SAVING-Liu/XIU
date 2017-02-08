/**
 * Created by Administrator on 2017/2/8.
 */
angular.module("aeannelog")
    .component("aeannelogComponent",{
        templateUrl:"js/app/modules/AEannelog/aeannelog.template.html",
        controller:["$scope", "$http",
            function($scope, $http){
                var that = this;
                /*异步请求获取数据*/
                $http.get("js/app/modules/AEannelog/aeannelog.json").then(function(response) {
                    /*异步请求成功获取的数据，保存到控制器的reslist变量中*/
                    that.reslist = response.data;
                });
            }]
    })