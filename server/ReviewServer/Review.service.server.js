/**
 * Created by suhas on 3/3/2017.
 */
module.exports = function(app) {

    app.post("/api/review/",postReviews);
    app.get("/api/allreview/",getAllReviews);

    var connectionString = 'mongodb://admin:admin123@ds113580.mlab.com:13580/reviews';
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    mongoose.Promise = global.Promise;
    var reviews = mongoose.Schema({
        Title:{type: String},
        fRating:{type: String},
        reqRating:{type: String},
        cRating:{type: String},
        body:{type:String}
    });


    var getAllReview = mongoose.model("reviews",reviews);
    var postReview = mongoose.model("reviews",reviews);

    function getAllReviews(req,res) {
        getAllReview.find().then(
            function (rev) {
                // console.log(rev);
                res.json(rev);
            }
        );
    };

    function postReviews(req,res) {
        var object = req.body;
        postReview.create({
            "Title": object.Title,
            "fRating":object.rating1,
            "reqRating":object.rating2    ,
            "cRating":object.rating3,
            "body":object.body
        });

    };
    // app.post('/api/blogs', function(req, res) {
    //     Blog.create({
    //         title: req.body.title,
    //         body: req.body.body,
    //         author: req.body.author,
    //         date: req.body.date
    //     }, function(err, blog) {
    //         if (err)
    //             res.send(err);
    //         Blog.find(function(err, blogs) {
    //             if (err)
    //                 res.send(err);
    //             res.json(blogs);
    //         });
    //     });
    // });

};