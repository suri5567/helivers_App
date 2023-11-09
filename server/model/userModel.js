import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	first_name:{
		type:String,
		required:true
	},
	last_name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	gender:{
		type:String,
		required:true
	},
	avatar:{
		type:String,
		required:true
	},
	domain:{
		type:String,
		required:true
	},
	available:{
		type:String
	},
})


export default mongoose.model("usersInfo", userSchema)