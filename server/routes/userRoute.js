import express from 'express'
import {handleUserInfo, getAllUserInfo, getUserInfo, updateUserInfo, deleteUser} from '../controllers/user.js'

const router = express.Router();

router.post('/users', handleUserInfo)
router.get('/users', getAllUserInfo)
router.get('/users/:id', getUserInfo)
router.put('/users/:id', updateUserInfo)
router.delete('/users/:id', deleteUser)


export default router;