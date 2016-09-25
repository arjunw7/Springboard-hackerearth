var mongoose = require('mongoose');   
var Votes = mongoose.model('Votes');
var express = require('express');
var router = express.Router();

router.route('/vote')
        .post(function (req, res){
              Votes.findOne({ courseId: req.query.courseId }, function(err, result) {
                if(result) {
                result.upvotes = parseInt(result.upvotes) + parseInt(req.query.upvote);
                result.downvotes = parseInt(result.downvotes) + parseInt(req.query.downvote);

                    result.save(function(err) {
                      console.log(result);
                      return res.send(JSON.stringify(result));
                    });
                }

               if(!result){
                    var newVote = new Votes();
                    newVote.courseId = parseInt(req.query.courseId);
                    newVote.upvotes = parseInt(req.query.upvote);
                    newVote.downvotes = parseInt(req.query.downvote);
                    newVote.save(function(err, newVote) {
                        if (err){
                            return res.send(500, err);
                        }
                        return res.send(JSON.stringify(newVote));
                    });
               }

              });
        })

         .delete(function(req, res){
            Votes.remove({
                _id: req.params.id
            }, function(err) {
                if (err)
                    res.send(err);
                res.json("Votes deleted");
            });
        });

module.exports = router;
