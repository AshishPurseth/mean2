import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  name:String,
  country:String
})

export default mongoose.model('Post' , PostSchema)
