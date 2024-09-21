import React from 'react';
import {useEffect, useState } from 'react';
import Card from './Card';


export default function OnlineDelivery() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('../restaurantChains.json')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error("missing images"))
    }, [])
  return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex items-center my-5  justify-between'>
                <div className='text-[25px] font-bold'>Restaurant with online delivery in Ballabgarh</div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map((item,index) =>{
                        return <Card {...item} key={index}/>
                    })
                }
            </div>
        </div>
    );
}
