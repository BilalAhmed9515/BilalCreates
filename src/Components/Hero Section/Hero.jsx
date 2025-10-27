import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MdDoubleArrow } from "react-icons/md";

const Hero = ({bgimg, name}) => {
    const location = useLocation()
    return (
        <>
            <div style={{ backgroundImage: `url(${bgimg})` }} className='lg:h-[60vh] h-[40vh] object-cover bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center'>
                <div className='flex flex-col bg-black/50 w-full h-full items-center justify-center text-center text-white'>
                    <h1 className='font-royal font-bold lg:text-[20vh] text-5xl tracking-wider uppercase'>{name}</h1>
                    <p className='text-3xl font-Cormorant flex justify-center items-center gap-2 capitalize'><NavLink to="/">Home</NavLink> <MdDoubleArrow className='mt-2'/> {location.pathname.substring(1)}</p>
                </div>

            </div>
        </>
    )
}

export default Hero