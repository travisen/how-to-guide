//Callback functions used for logging errors
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        console.log('Data from our call[%s]', data);
    };

    var Twitter = require('twitter-node-client').Twitter;

    //var Twitter = require('twitter-js-client').Twitter;

    //Get this data from your twitter apps dashboard
    var config = {
        "consumerKey": "jmR8MJ9r8scI6eZ1VxFrb8FL9",
        "consumerSecret": "U2Bv1RMisN1tCZ0yGTRUXJOiXYM44WqdUUdNhRywRPn0UTkTx5",
        "accessToken": "731282217935208448-dygg1OawvxjFBcMEDafjdP10Hf7JtKX",
        "accessTokenSecret": "BIPDN5WD1fCOs1nizzJ2geI8MzRdFSYFVlu8jQAXcm5J1",
        "callBackUrl": "XXX"
    }

    var twitter = new Twitter(config);

    twitter.getTweet({ id: '732595450746970112'}, error, success);


    //Example calls

    //twitter.getUserTimeline({ screen_name: 'theAbrasiveBot', count: '1'}, error, success);

    //twitter.getMentionsTimeline({ count: '10'}, error, success);

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