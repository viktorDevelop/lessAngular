angular.module('app').controller('tasksCtrl',function(taskFactory) {
	 this.list =  taskFactory.getTask();
	 this.addTask = function(){
	 	taskFactory.addTask(this.taskName);
	 	this.taskName = '';
	 }

	 this.removeTask = function(tasks){
	 	taskFactory.removeTask(tasks);
	 }
});