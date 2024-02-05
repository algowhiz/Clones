import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Movie from './Movie';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchUrl , row_id}) => {


    const [movies, setmovies] = useState([]);
    

    useEffect(() => {
        axios.get(fetchUrl).then((response) => {
            setmovies(response.data.results);
            console.log();
        });
    }, [fetchUrl]);


    const slidel = () =>{
        let slider = document.getElementById('slider'+row_id);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slider = () =>{
        let slider = document.getElementById('slider'+row_id);
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    // console.log(movies);

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft className='bg-white rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} onClick={slidel} />
                <div id={'slider'+row_id} className='w-full left-0 h-full overflow-x-scroll whitespace-nowrap scroll-smooth  scrollbar-hide relative'>
                    {movies.map((it, id) => (
                        <Movie key={id} it={it}/>
                    ))}
                </div>
                <MdChevronRight className='bg-white right-0 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'size={40} onClick={slider} />
            </div>
        </>
    )
}

export default Row