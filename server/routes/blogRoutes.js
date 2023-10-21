import { Router } from "express";
const blogRouter = Router();
import { getAllBlogs, addBlog, getSingleBlog, deleteBlog, getByUserId } from "../controllers/blogController.js";

blogRouter.get("/",getAllBlogs);
blogRouter.post('/add', addBlog);
blogRouter.get("/:id", getSingleBlog);
blogRouter.delete("/:id",deleteBlog);
blogRouter.get("/user/:id",getByUserId);
export default blogRouter;