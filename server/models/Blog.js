import mongoose, { Schema as _Schema, Types, model } from "mongoose";

const Schema = _Schema;

const blogSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    desc :  {
        type: String,
        required: true,
    },
    user : {
        type: mongoose.Types.ObjectId,
        ref:"User",
        required: true,
    }
})

//export default  model("Blog", blogSchema);
export const Blog = mongoose.model('Blog', blogSchema);