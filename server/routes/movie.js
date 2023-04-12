const express=require("express");
const router=express.Router();
const {allMovie,createMovie}=require("../controllers/movie");

router.get("/movies",allMovie);
router.post("/create",createMovie);

module.exports=router