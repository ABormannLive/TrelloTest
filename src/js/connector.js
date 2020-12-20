console.log('Hello World!');

// debugger console.log('Hello World!');
var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg'

window.TrelloPowerUp.initialize({
    'card-badges': function (t, opts) {
    // card badge testing function
    return t.card('all')
    .then(function(card) {
      console.log(card);
      return [{
        text: card.idShort
      }];
    })
  },
  'card-detail-badges': function (t, opts) {
    // card badge testing function
    return t.card('all')
    .then(function(card) {
      console.log(card);
      return [{
        text: card.pos.toString()
      }];
    })
  },
  'card-buttons': function (t, opts) {
      return [];
  },
  'board-buttons': function (t, opts) {
      return [];
  },
  'card-back-section': function(t, opts){
    return {
      title: 'CMDBuild Data',
      icon: "./logocmdbuild.png", // Must be a gray icon, colored icons not allowed.
      content: {
        type: 'iframe',
        url: t.signUrl('./section.html'),
        height: 230, // Max height is 1500.
        action: {
          text: 'My Action',
          callback: (t) => t.popup({
            title: 'Some actions',
            items: [{
              text: 'Choose Time',
              callback: function (t, opts) { }
            }, {
              text: 'In 1 hour',
              callback: function (t, opts) {  }
            }, {
              text: 'In 2 hours',
              callback: function (t, opts) {  }
            }]
          }),
        },
      }
    };
  }
 });