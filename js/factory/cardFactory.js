angular.module('app').factory('cardFactory',function(){
	var service = {};



  var cards = [
    {
      id: 1,
      description: 'Fix bug in player',
      list_id: 1
    },
    {
      id: 2,
      description: 'Add feature with D3',
      list_id: 1
    },
    {
      id: 3,
      description: 'Learn AngularJS',
      list_id: 3
    }
  ];

   service.getCards = function (task) {
    return _.filter(cards, { list_id: task.id });
  };

   service.createCard = function (list, cardDescription) {
    cards.push({
      id: _.uniqueId('card_'),
      description: cardDescription,
      list_id: list.id
    });
  };


 return service;
  
});