    //Callback functions
    // used for logging errors
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };

    var userNameTo = "";
    var stringToTest = "";

    // used for recieving data
    var success = function (data) {
        console.log('Data from our call[%s]', data);
        // response stores an object containing the data recieved
        var response = JSON.parse(data);

       // console.log("This is the screen_name:", response[0]user.screen_name,
        //  "This is the tweet's contents:", response[0].text);


        //searchString(response[0].text));
        twitter.postTweet({ status: searchString(response[0].text,
          response[0].user.screen_name)}, error, success);
        //console.log("This is the tweet's contents:", response.text,
          //"This is the tweet's id:", response.id_str,
          //"This is the username of whomever sent the tweet:",
          // response.user.screen_name,
         // "This is the name of whomever sent the tweet:",
         // response.user.name);
    };
    var schedule = require('node-schedule');
    var Twitter = require('twitter-node-client').Twitter;

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "jmR8MJ9r8scI6eZ1VxFrb8FL9",
        "consumerSecret": "U2Bv1RMisN1tCZ0yGTRUXJOiXYM44WqdUUdNhRywRPn0UTkTx5",
        "accessToken": "731282217935208448-dygg1OawvxjFBcMEDafjdP10Hf7JtKX",
        "accessTokenSecret": "BIPDN5WD1fCOs1nizzJ2geI8MzRdFSYFVlu8jQAXcm5J1",
        "callBackUrl": "XXX"
    }

    var twitter = new Twitter(config);

    //twitter.getTweet({ id: '732595450746970112'}, error, success);

    //twitter.postTweet({ status: 'Hi, I like cats when Im happy'}, error, success);
    // this function returns a random phrase from a list
   // var phraseGen = function(){
   // var randomnumber = Math.floor(Math.random() * (4 - 0 + 1));
    //console.log(randomnumber);
   // var botPhrases = ["I am in a very bad mood", "STOP BOTHERING ME", "Ugh, what?", "K", 
   // "I have lots of words. I use all the best words"];
   // return botPhrases[randomnumber];
   // };

    //twitter.postTweet({ status: phraseGen()}, error, success);

   // console.log(botPhrases[randomnumber]);

    //Example calls

    //this function searches a string for a specified substring
    searchString = function(aString, respondTo) {
      if(aString.indexOf('your majesty')!= -1) {
        return "Awe, you're too kind!"+'@'+respondTo;
      }
      else {
        return "REALLY? DO YOU EVEN KNOW WHO I AM!?"+'@'+respondTo;
      }
    }

    twitter.getMentionsTimeline({ count: '1'}, error, success);

    //var aGoodRandomString = "hello, your majesty!";
    //var aBadRandomString = "hello, you are a doodoo head!";
    //console.log(searchString(aGoodRandomString)); // "Awe, you're too kind!"
    //console.log(searchString(aBadRandomString)); // "REALLY? DO YOU EVEN KNOW WHO I AM!?"

   // twitter.getHomeTimeline({ count: '10'}, error, success);

   // twitter.getReTweetsOfMe({ count: '10'}, error, success);



    //
    // Get 10 tweets containing the hashtag haiku
    //

    //twitter.getSearch({'q':'#haiku','count': 10}, error, success);

    //
    // Get 10 popular tweets with a positive
    // attitude about a movie that is not scary 
    //

   // twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);


