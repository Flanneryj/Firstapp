var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Butterfly Campgrounds",  
        image: "https://farm1.staticflickr.com/211/467048513_4042c7979f.jpg",
        description: "Beautiful campgrounds!!"
    },
    {
        name: "Granite Peaks Campground", 
        image: "https://farm2.staticflickr.com/1274/4670974422_ec49d65ab2.jpg",
        description: "Tons of places to go hiking, fishing and climbing!"
    },
    {
        name: "Tree Light Paradise", 
        image: "https://farm4.staticflickr.com/3186/2965524855_e2e236e0ce.jpg",
        description: "This place has lots of trees and also other fun stuff!"
    },
    {
        name: "Mount Baker", 
        image: "https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1472586930/campground-photos/rte8k1ft7sdisqf5ykfs/index-wa-skykomish-river-the-landing-seattle-tent-forest-lodging.jpg",
        description: "Brrrr!"
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
       if(err){
           console.log(err);
       }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                   //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
               }
            });
       });
    }); 
    //add a few comments
}

module.exports = seedDB;
