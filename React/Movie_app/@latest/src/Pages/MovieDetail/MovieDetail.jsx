// import React, { useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import { useSelector,useDispatch } from 'react-redux';
// import { getSingleMovie } from '../../features/Movies/movieSlice';
// import "./MovieDetail.css"
// export default function MovieDetail() {
//   const dispatch = useDispatch();
//   const allMovies = useSelector((state)=>state.movie?.movies);
//   const movie = useSelector((state)=>state.movie.singleMovie);
//   console.log("all movies from detail",allMovies);
//   console.log("single movies from detail",movie);

//   const { id } = useParams();
//   let result = allMovies.find((movie)=>movie.id===id)
//   useEffect(()=>{
//     dispatch(getSingleMovie(result))
//   },[result])
//   return (
//     <div>
//         <div className="max-w-sm rounded overflow-hidden shadow-lg" >
//         <img
//           className="w-full"
//           src={movie?.poster[0]}
//           alt={movie?.title}
//         />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{movie?.title}</div>
//           <p className="text-gray-700 text-base" >{movie?.description}</p>
//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleMovie } from '../../features/Movies/movieSlice';
import { ChevronLeft, ChevronRight, Clock, Globe, Star } from 'lucide-react';

export default function MovieDetail() {
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state.movie?.movies);
  const movie = useSelector((state) => state.movie.singleMovie);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { id } = useParams();
  let result = allMovies.find((movie) => movie.id === id);

  useEffect(() => {
    dispatch(getSingleMovie(result));
  }, [result]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [movie]);

  const nextImage = () => {
    if (movie?.poster) {
      setCurrentImageIndex((prev) => (prev + 1) % movie.poster.length);
    }
  };

  const prevImage = () => {
    if (movie?.poster) {
      setCurrentImageIndex((prev) => (prev - 1 + movie.poster.length) % movie.poster.length);
    }
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-slate-700/50">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-4">
              <div className="relative group rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={movie.poster[currentImageIndex]}
                  alt={`${movie.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {movie.poster.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium">
                  {currentImageIndex + 1} / {movie.poster.length}
                </div>
              </div>

              {movie.poster.length > 1 && (
                <div className="flex gap-3 justify-center">
                  {movie.poster.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => goToImage(index)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                        currentImageIndex === index
                          ? 'ring-4 ring-blue-500 scale-110'
                          : 'ring-2 ring-slate-600 hover:ring-slate-400 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col justify-between space-y-6">
              <div>
                <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
                  {movie.title}
                </h1>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full">
                    <Star className="w-5 h-5 fill-current mr-2" />
                    <span className="text-lg font-bold">{movie.rating}</span>
                    <span className="text-sm ml-1">/10</span>
                  </div>
                  <span className="text-slate-400 text-lg">{movie.year}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {movie.genre?.map((g, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 text-lg leading-relaxed mb-8">
                  {movie.description}
                </p>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                    <div className="flex items-center gap-3 text-slate-400 mb-1">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-medium">Duration</span>
                    </div>
                    <p className="text-white text-lg font-semibold ml-8">{movie.duration}</p>
                  </div>

                  <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                    <div className="flex items-center gap-3 text-slate-400 mb-1">
                      <Globe className="w-5 h-5" />
                      <span className="text-sm font-medium">Language</span>
                    </div>
                    <p className="text-white text-lg font-semibold ml-8">{movie.language}</p>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-400 text-sm font-medium mb-1">Director</p>
                  <p className="text-white text-lg font-semibold">{movie.director}</p>
                </div>

                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/30">
                  <p className="text-slate-400 text-sm font-medium mb-2">Cast</p>
                  <div className="flex flex-wrap gap-2">
                    {movie.cast?.map((actor, index) => (
                      <span
                        key={index}
                        className="text-white bg-slate-600/40 px-3 py-1 rounded-lg text-sm"
                      >
                        {actor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <button className="px-8 bg-slate-700 hover:bg-slate-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 border border-slate-600">
                  Add to Watch-List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}