import React from 'react';
import { RxCaretDown } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { useState } from 'react';

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () =>{
        setToggle(true);
    }

    const hideSideMenu = () =>{
        setToggle(false);
    }

    const links = [
        {
            icon: <IoSearchOutline />,
            name: "Search"
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "Offers",
            sup: "New"
        },
        {
            icon:  <IoHelpBuoyOutline />,
            name: "Help"
        },
        {
            icon: <FiUser />,
            name: "Sign In"
        },
        {
            icon: <PiShoppingCartSimpleLight />,
            name: "Cart"
        },
    ]

    return (
        <>
            <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
                opacity: toggle ? 1 : 0, 
                visibility: toggle ? 'visible' : 'hidden'
            }}>
                <div onClick={(e) =>{
                    e.stopPropagation();
                }} className='w-[500px] bg-white h-full absolute duration-[400ms]' style={{
                    left: toggle ? "0%" : "-100%",
                }}>  
                </div>
            </div>

            <header className='p-[15px] shadow-xl text-[#686b78]'>
                <div className='max-w-[1200px] mx-auto flex items-center'>

                    <div className='w-[100px]'>
                        <img src="image/Swiggy logo.png" className='w-full' alt="" />
                    </div>

                    <div className=''>
                        <span className='font-bold border-b-[3px] border-[black]'>Ballabgarh</span> Faridabad, Haryana 121004, India
                        <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline text-[#fc8019] cursor-pointer'/>
                    </div>

                    <nav className='flex list-none gap-10 ml-auto text-[18px] font-semibold'>
                        {
                            links.map((link,index) =>{
                                return <li key={index} className='flex items-center gap-2 hover:text-[#fc8019] cursor-pointer'>
                                    {link.icon}
                                    {link.name}        
                                    <sup className='text-[#ffa700]'>{link.sup}</sup>        
                                </li>
                            })
                        }
                    </nav>
                </div>
            </header>

        </>
    );
}
