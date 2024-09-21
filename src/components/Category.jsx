import React from 'react';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function Category() {
  
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    fetch('../category.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error fetching error'));
  }, [])


  // next slide
  const nextSlide = () =>{
    console.log(data.length);
    console.log(slide + 3);
    if(data.length - 5 === slide) return false;
    setSlide(slide + 3);
  }

  // previous slide
  const previousSlide = () =>{
    if(slide === 0) return false;
    setSlide(slide - 3);
  }

  return (
    <div className='max-w-[1200px] mx-auto px-2'>
      <div className='flex items-center my-5  justify-between'>
        <div className='text-[25px] font-bold'>What's on your mind?</div>
          <div className='flex'>
            <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={previousSlide}>
              <FaArrowLeft />
            </div>
            <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2' onClick={nextSlide}>
              <FaArrowRight />
            </div>
        </div>
      </div>
       
      <div className='flex overflow-hidden'>
        {
          data.map((item, index) =>(
            <div key={index} className='w-[200px] shrink-0 duration-500 pl-5 pr-5 cursor-pointer' style={{
              transform: `translateX(-${slide*100}%)`
            }}>
              <img src={item.image} alt={item.image} />
            </div>
          ))
        }
      </div>
      <hr className='my-6 border-[1px]'/>
      
    </div>
  );
}
 