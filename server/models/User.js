import mongoose, { Schema as _Schema, Types, model } from "mongoose";

const Schema = _Schema;

const userSchema = new Schema({
    name : {
        type: String,
        required: true,
    },

    email :  {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    blogs: [{ type: Types.ObjectId, ref: "Blog", required: true }],
})

//export default  model("User", userSchema);
export const User = mongoose.model('User', userSchema);