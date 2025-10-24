import React, { useEffect, useState } from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../../features/Movies/movieThunk";
export default function Home() {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const movies =  useSelector((state)=>state.movie?.movies)
  console.log("_____________",movies)
  // useEffect(() => {
  //   const getMovies = async () => {
  //     try {
  //       console.log("+++++++++==")
  //     const res = await fetch("http://localhost:3000/results");
  //     console.log("***********",res);
  //     const data = await res.json();
  //     console.log("data from home",data);
  //     // console.log("data.results from home",data.results);
  //     setMovies(data);
        
  //     } catch (error) {
  //       console.log("error",error)
  //     }
  //   };
  //   getMovies();
  // },[]);
  useEffect(()=>{
    dispatch(getMovies());
  },[])

 return (
  <div className="flex flex-wrap justify-around gap-y-4">
    {movies?.map(movie => (
      <div className="max-w-sm rounded overflow-hidden shadow-lg" key={movie.id}>
        <img
          className="w-full"
          src={movie.poster[0]}
          alt={movie.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie.title}</div>
          <p className="text-gray-700 text-base">{movie.description}</p>
        </div>
      </div>
    ))}
  </div>
);
}
