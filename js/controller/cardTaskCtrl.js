angular.module('app').controller('cardTaskCtrl',function(cardFactory,taskFactory){
	 
	this.getCards = function(task)
		{
			return cardFactory.getCards(task);
		}
	this.createCard = function (list) {
    cardFactory.createCard(list, this.cardDescription);
    this.cardDescription = '';
  };

});