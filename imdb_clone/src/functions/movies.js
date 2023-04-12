import React from "react";
import axios from "axios";


export const getMovies=async()=>{
    return await axios.get(`http://localhost:8000/api/movies`,);
}

export const createMovie=async(values)=>{
    return await axios.post(`http://localhost:8000/api/create`,{values});
}