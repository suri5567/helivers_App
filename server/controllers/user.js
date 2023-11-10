import Usermodel  from '../model/userModel.js'

export const handleUserInfo = async (req, res) => {
	try {
		
			const newUser = await Usermodel.create({...req.body})
			return res.status(201).json("data added successfully !!!")
		
	} catch (error) {
		return res.status(500).json("Internal server error !!!")
	}


}


export const getAllUserInfo = async (req, res) => {
	try {
		// const selections = JSON.parse(req.query.select) || {};
		const searchTerm = req.query.searchTerm || '';
		const limit = parseInt(req.query.limit) || 20;
		const currentPage = parseInt(req.query.page) || 1;
		const totalCount = await Usermodel.countDocuments();
		const totalPages = Math.ceil(totalCount/limit);
	
	
		if (searchTerm) 
		{
		  
		  const result = await Usermodel
		  .find({$or : [
			{ first_name: { $regex: searchTerm, $options: 'i' } },
			{ last_name: { $regex: searchTerm, $options: 'i' } },
		  ]})
		  .skip((currentPage - 1) * limit)
		  .limit(limit);
	
		console.log('Result:', result); // Add this line to log the result
	
		return res.status(200).json({ result, totalPages });
		}else{
			const result = await Usermodel
		  .find({})
		  .skip((currentPage - 1) * limit)
		  .limit(limit);
	
		console.log('Result:', result); // Add this line to log the result
	
		return res.status(200).json({ result, totalPages });
		}

	
	  } catch (error) {
		console.error(error);
		return res.status(500).json("Internal server error !!!");
	  }
}



export const getUserInfo = async (req, res) => {
	const { id } = req.params;
	//   console.log("id", id)
	try {
		const userId = await Usermodel.findById(id);
		// console.log("userIId", userId)
		if (!userId) {
			return res.status(404).json("User not found !!!");
		} else {
			return res.status(200).json(userId);
		}
	} catch (error) {
		return res.status(500).json(" Internal server error !!!")
	}
}


export const updateUserInfo = async (req, res) => {
	const { id } = req.params;
	console.log("idddd", id)
	console.log("req.body", req.body)

	try {
		const userId = await Usermodel.findByIdAndUpdate(id, req.body)
		if (!userId) {
			return res.status(404).json("User not found !!!")
		} else {
			return res.status(201).json("User updated successfully !!!");
		}
	} catch (error) {
		return res.status(500).json("Internal server error !!!")
	}
}
export const deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		const userId = await Usermodel.findByIdAndDelete(id);
		if (!userId) {
			return res.status(404).json("User not found !!!")
		} else {
			return res.status(200).json("User deleted successfully !!!")
		}
	} catch (error) {
		return res.status(500).json("Internal server error !!!")
	}
}

export const filterData = async(req,res)=>{
	// console.log(domain,gender,availability);
	const selections = JSON.parse(req.query.select) || {};
	const {domain,gender,availability} = selections;
	
	try {
		const user = await Usermodel.find({$and:[{domain:domain},{gender:gender},{available:availability}]})
		console.log(user);
		return res.status(200).json({result:user})
	} catch (error) {
		return res.status(500).json("Internal server error !!!")
	}
}