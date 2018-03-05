// you will also have to setup the referring domains on your marvel developer portal
var PRIV_KEY = '30a93feb0aa180b4e18fdbf4c356e353b3c8a355';
var PUBLIC_KEY = '634b818d5514c889fafb9e1da09145cf';

function getMarvelResponse() {
  // you need a new ts every request                                                                                    
  var ts = 9;
  var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = '1009718'; // wolverine                                                                             
  var url = 'http://gateway.marvel.com:80/v1/public/comics';
  console.log(url);

  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
    characters: characterId
  })
    .done(function(data) {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail(function(err) {
      // the error codes are listed on the dev site
      console.log(err);
    });
};

getMarvelResponse();
