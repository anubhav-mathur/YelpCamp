var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Moscow greens",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moscow-_Hotel_Ukraine_%2836892890532%29.jpg/250px-Moscow-_Hotel_Ukraine_%2836892890532%29.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Tokyo snow",
        image: "https://i.ytimg.com/vi/Y4apM0XHxwo/maxresdefault.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Sydney desert",
        image: "https://thumbs-prod.si-cdn.com/985qtzqw6P340sIya8wQiSEqT2Y=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/f2/94/f294516b-db3d-4f7b-9a60-ca3cd5f3d9b2/fbby1h_1.jpg  ",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

function seedDB(){
    //remove all campgrounds
    Campground.deleteMany({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Removed Successfully!");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                      console.log(err);
                    } else {
                      console.log("added a new campground");
                      Comment.create({
                          text: "This is a good comment!",
                          author: "author no. 1"
                      }, function(err, comment){
                          if(err){
                              console.log(err);
                          } else {
                              campground.comments.push(comment);
                              campground.save();
                              console.log("added comment");
                          }
                      });
                    }
                }); 
            });
        }
    });
    
    
    //add a few campgrounds
}
module.exports = seedDB;
