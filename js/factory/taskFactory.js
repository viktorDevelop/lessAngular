angular.module('app').factory('taskFactory',function(){

	var service = {};

  var lists = [
    {
      id: 1,
      title: 'Иванов'
    },
    {
      id: 2,
      title: 'Петров'
    },
    {
      id: 3,
      title: 'Ковалев'
    }
  ];

  service.getTask = function () {
    return lists;
  };

  service.addTask = function(taskName){
  	 lists.push({
      id: _.uniqueId('list_'),
      title: taskName
    });
  };

  return service;
});