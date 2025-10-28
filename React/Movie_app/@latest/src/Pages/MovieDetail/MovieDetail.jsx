import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getSingleMovie } from '../../features/Movies/movieSlice';
import "./MovieDetail.css"
export default function MovieDetail() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state)=>state.movie?.movies);
  const movie = useSelector((state)=>state.movie.singleMovie);
  console.log("all movies from detail",allMovies);
  console.log("single movies from detail",movie);

  const { id } = useParams();
  let result = allMovies.find((movie)=>movie.id===id)
  useEffect(()=>{
    dispatch(getSingleMovie(result))
  },[result])
  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg" >
        <img
          className="w-full"
          src={movie?.poster[0]}
          alt={movie?.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{movie?.title}</div>
          <p className="text-gray-700 text-base" >{movie?.description}</p>
        </div>
      </div>
    </div>
  )
}
