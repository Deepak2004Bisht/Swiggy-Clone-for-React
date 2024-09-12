import React from 'react';
import { useEffect, useState } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


export default function Category() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../category.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('Error fetching error'));
  }, [])

  return (
    <div className='max-w-[1200px] mx-auto'>
        <div className='flex items-center my-5  justify-between'>
            <div className='text-[25px] font-bold'>What's on your mind?</div>
            <div className='flex'>
                <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2'>
                  <FaArrowLeft />
                </div>
                <div className='cursor-pointer flex items-center justify-center w-[30px] h-[30px] bg-[#02060c26] rounded-full mx-2'>
                  <FaArrowRight />
                </div>
            </div>
        </div>
       
       <div className='flex'>
        {
          data.map((item, index) =>(
            <div key={index} className='flex-grow'>
              <img src={item.image} alt={item.image} />
            </div>
          ))
        }
       </div>

      
    </div>
  );
}
 