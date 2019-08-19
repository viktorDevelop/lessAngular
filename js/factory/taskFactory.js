angular.module('app').factory('taskFactory',function(){

	var service = {};

  var lists = [
    {
      id: 1,
      title: 'Todo'
    },
    {
      id: 2,
      title: 'Doing'
    },
    {
      id: 3,
      title: 'Done'
    }
  ];

  service.getTask = function () {
    return lists;
  };

  return service;
});