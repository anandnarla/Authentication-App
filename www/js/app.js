// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('FingerPrintModule', ['ionic', 'ionic.native'])
.controller('MyCtrl',function ($scope, FingerPrintAuthService, $window, $cordovaToast, $state) {
  $scope.formData={
    name:'',
    password:'',
    authwithFingerPrint:false};
  $scope.onChange = function () {
    console.log($scope.formData.name);
    console.log($scope.formData.password);
    console.log($scope.formData.authwithFingerPrint);
  };
  $scope.submit = function () {
    console.log($scope.formData.name);
    console.log($scope.formData.password);
    console.log($scope.formData.authwithFingerPrint);
    var encryptConfig = {
        clientId: "myAppName",
        cipherMode:'decrypt',
        username: $scope.formData.name,
        // password: $scope.formData.password,
        disableBackup:true,
        userAuthRequired:false,
        token:'TwIJM21l3lYIhRbUWjGyJQ==',
        dialogTitle:'Swipe the Finger to get the details'
    };
    FingerPrintAuthService.autherize(encryptConfig).then(function(result){
      console.log(JSON.stringify(result));
      if($scope.formData.name==="Anand" && result.password==="sa"){
        $state.go('success');
      }
      else{
        $state.go('failure');
      }
    },
    function (error) {
      $cordovaToast.show(error,'long','bottom').subscribe();
      console.log(error);
    });
  };
})
