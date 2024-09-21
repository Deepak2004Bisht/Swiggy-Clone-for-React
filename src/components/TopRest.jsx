import React from 'react';
import {useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import Card from "../components/Card";

export default function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        fetch('../restaurantChains.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("missing images"))
    }, [])


    // next slide
    const nextSlide = () => {
        console.log(data.length);
        console.log(slide + 2);
        if(data.length - 2 === slide) return false;
        setSlide(slide + 2)
    }

    // previous slide
    const previousSlide = () => {
        if(slide === 0) return false;
        setSlide(slide - 2)
    }



  return (
    <div className='max-w-[1200px] mx-auto px-2'>
        <div className='flex items-center my-5  justify-between'>
            <div className='text-[25px] font-bold'>Top restaurant chains in Faridabad</div>
            <div className='flex'>
                <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={previousSlide}>
                    <FaArrowLeft />
                </div>
                <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={nextSlide}>
                    <FaArrowRight />
                </div>
            </div>
        </div>

        <div className='flex gap-5 overflow-hidden'>
           {
            data.map((item, index) =>{
                return <Card className="shrink-0 duration-500" width="w-full md:w-[273px]" {...item} key={index} style={
                    {
                        transform: `translateX(-${slide*100}%)`
                    }
                }/>
            })
           }
        </div>
        <hr className='my-4 border-[1px]'/>
    </div>
  );
}
