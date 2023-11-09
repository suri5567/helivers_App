import Usermodel  from '../model/userModel.js'

export const handleUserInfo = async (req, res) => {
	try {
		
			const newUser = await Usermodel.create({...req.body})
			return res.status(201).json("data added successfully !!!")
		
	} catch (error) {
		return res.status(500).json("Internal server error !!!")
	}


}
// export const getAllUserInfo = async (req, res) => {
// 	try {
// 		const searchTerm = req.query.searchTerm || "";
// 		const selection = req.query.select; 
// 		const limit = parseInt(req.query.limit) || 20;
// 		const currentPage = parseInt(req.query.page) || 1;
// 		const totalCount = await model.countDocuments();
// 		const totalPages = Math.ceil(totalCount / limit);

// 		let query = {};

// 		if (searchTerm) {
// 			query = { first_name: { $regex: searchTerm, $options: 'i' } };
// 		}

// 		const result = await model.find(query)
// 			.skip((currentPage - 1) * limit)
// 			.limit(limit);

// 		return res.status(200).json({ result, totalPages });
// 	} catch (error) {
// 		console.error(error);
// 		return res.status(500).json("Internal server error !!!");
// 	}
// };

// export const getAllUserInfo = async (req, res) => {
// 	try {
// 	  const searchTerm = req.query.searchTerm || "";
// 	  const selection = req.query.select;
// 	  const limit = parseInt(req.query.limit) || 20;
// 	  const currentPage = parseInt(req.query.page) || 1;
// 	  const totalCount = await model.countDocuments();
// 	  const totalPages = Math.ceil(totalCount / limit);

// 	  let query = {};

// 	  if (searchTerm) {
// 		query = { first_name: { $regex: searchTerm, $options: 'i' } };
// 	  }

// 	  if (selection) {
// 		// Build a dynamic query based on the selection
// 		query.$or = selection.map((group) => {
// 		  return {
// 			$and: group.map((item) => {
// 			  // Assuming your items are in the format of { key: 'field', value: 'selectedValue' }
// 			  const key = item.key;
// 			  const value = item.value;

// 			  return { [key]: value };
// 			}),
// 		  };
// 		});
// 	  }

// 	  const result = await model.find(query)
// 		.skip((currentPage - 1) * limit)
// 		.limit(limit);

// 	  return res.status(200).json({ result, totalPages });
// 	} catch (error) {
// 	  console.error(error);
// 	  return res.status(500).json("Internal server error !!!");
// 	}
//   };

// export const getAllUserInfo = async (req, res) => {
// 	try {
// 		const searchTerm = req.query.searchTerm || "";
// 		const selection = JSON.parse(req.query.select) || []; // Parse the selection as JSON
// 		const limit = parseInt(req.query.limit) || 20;
// 		const currentPage = parseInt(req.query.page) || 1;


// 		// console.log("selection", selection)
// 		let query = {};

// 		if (searchTerm) {
// 			query = { first_name: { $regex: searchTerm, $options: 'i' } };
// 		}

// 		if (selection.length > 0) {
// 			// Build a dynamic query based on the selection
// 			query.$or = selection.map((item) => {
// 				return {
// 					[item.key]: item.value,
// 				};
// 			});
// 		}

// 		const result = await model
// 			.find(query)
// 			.skip((currentPage - 1) * limit)
// 			.limit(limit);

// 		return res.status(200).json({ result });
// 	} catch (error) {
// 		console.error(error);
// 		return res.status(500).json("Internal server error !!!");
// 	}
// };

// export const getAllUserInfo = async (req, res) => {
// 	try {
// 	  const selection = JSON.parse(req.query.select) || {};
// 	  const limit = parseInt(req.query.limit) || 20;
// 	  const currentPage = parseInt(req.query.page) || 1;
// 	  const searchTerm = req.query.searchTerm || ""; // Include searchTerm parameter
  
// 	  let query = {};
  
// 	  if (searchTerm) {
// 		// Add a condition to filter based on the search term
// 		query.$or = [
// 		  // Customize this condition to match your data structure
// 		  { first_name: { $regex: searchTerm, $options: 'i' } },
// 		  // Add other fields if needed
// 		];
// 	  }
  
// 	  if (selection.length > 0) {
// 		query.$or = [
// 		  ...(query.$or || []), // Keep existing conditions if any
// 		  ...selection.map((item) => ({
// 			[item.key]: item.value,
// 		  })),
// 		];
// 	  }
  
// 	  const result = await model
// 		.find(query)
// 		.skip((currentPage - 1) * limit)
// 		.limit(limit);
  
// 	  return res.status(200).json({ result });
// 	} catch (error) {
// 	  console.error(error);
// 	  return res.status(500).json("Internal server error !!!");
// 	}
//   };

export const getAllUserInfo = async (req, res) => {
	try {
	  const selections = JSON.parse(req.query.select) || {};
	  const searchTerm = req.query.searchTerm || '';
	  const limit = parseInt(req.query.limit) || 20;
	  const currentPage = parseInt(req.query.page) || 1;
	  const totalCount = await Usermodel.countDocuments();
	  const totalPages = Math.ceil(totalCount/limit);
  
	  const query = {};
  
	  if (selections.domain && selections.domain.length > 0) {
		query.domain = { $in: selections.domain };
	  }
  
	  if (selections.gender && selections.gender.length > 0) {
		query.gender = { $in: selections.gender };
	  }
  
	  if (selections.availability && selections.availability.length > 0) {
		query.availability = { $in: selections.availability };
	  }
  
	  if (searchTerm) {
		query.$or = [
		  { first_name: { $regex: searchTerm, $options: 'i' } },
		  { last_name: { $regex: searchTerm, $options: 'i' } },
		];
	  }
  
	  console.log('Query:', query); // Add this line to log the query
  
	  const result = await Usermodel
		.find(query)
		.skip((currentPage - 1) * limit)
		.limit(limit);
  
	  console.log('Result:', result); // Add this line to log the result
  
	  return res.status(200).json({ result, totalPages });
	} catch (error) {
	  console.error(error);
	  return res.status(500).json("Internal server error !!!");
	}
  };
	
  




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
