import mongoose from 'mongoose';

var Article = mongoose.Schema({
    title: String,
	description: String
});

export default mongoose.model('Article', Article);