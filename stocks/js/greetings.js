var greetingsModule = angular.module( 'greetings', [] );

greetingsModule.service('greetingsService', function(){
  this.sayHello= function(text){
    return "Service says \"Hello " + text + "\"";
  };
  this.sayGoodbye = function(text){
    return "Service says \"Goodbye " + text + "\"";
  };
});