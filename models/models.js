var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var votesSchema = new mongoose.Schema({
    courseId: Number,
    upvotes: {type: Number, default: 0},
    downvotes: {type: Number, default: 0}
});

mongoose.model('Votes', votesSchema);
