angular.module('app').controller('mvMainCtrl', function ($scope) {  
  $scope.courses = [{name:'AAA', featured: false, published: new Date ('2/2/2002')},
    {name:'BBB', featured: false, published: new Date ('2/2/2002')},
    {name:'CCC', featured: true, published: new Date ('2/3/2002')},
    {name:'DDD', featured: false, published: new Date ('2/4/2002')},
    {name:'EEE', featured: true, published: new Date ('2/5/2002')} ] 
});
