import express from 'express'
import { register, VerfiyEmail } from '../controllers/Auth.js'
const AuthRoutes= express.Router()
AuthRoutes.post('/register',register)
AuthRoutes.post("/verifyemail",VerfiyEmail)
export default AuthRoutes
