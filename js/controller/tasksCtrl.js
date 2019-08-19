angular.module('app').controller('tasksCtrl',function(taskFactory) {
	 this.list =  taskFactory.getTask();
	 
});