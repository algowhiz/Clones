import React, { useState } from 'react'
import { CiHeart  } from "react-icons/ci";
import { FaHeart  } from "react-icons/fa";

const Movie = ({it}) => {
    const [like,setlike] =useState(false);
    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2' >
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${it?.backdrop_path}`} alt={it?.original_title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'></div>
            <p className='text-white white-space-normal  text-xs md:text-sm font-bold flex justify-center h-full text-center '>{it?.original_title}</p>
            <p>
                {like ? <CiHeart className='absolute top-4 left-4 text-gray-300' /> : <FaHeart />}
            </p>
        </div>
    )
}

export default Movie