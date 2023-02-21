import express from "express";
import{
    getUser,
    getUserFriend,
    addRemoveFriend,
} from "../controllers/users.js"
import { verifyToken } from '../middleware/auth';

const router = express.Router()

