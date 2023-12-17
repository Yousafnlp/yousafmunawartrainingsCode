import mongoose from "mongoose";




let Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true


        },

        email: {
            type: String,
            required: true
        },
        contact: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },
        gender: {
            type: String,
            required: true
        },
        course: {
            type: String,
            required: true
        },
    },
    {timestamps: true}
)


const users = mongoose.model("clients",Schema);
export default users;




