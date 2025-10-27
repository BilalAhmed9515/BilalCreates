import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { VscMenu } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";



const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const openmenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <>
            <div className='flex justify-between shadow-lg h-16 sticky top-0 left-0 items-center lg:px-40 px-16 bg-white'>
                <div><NavLink to="">Logo</NavLink></div>
                <div>
                    <ul className='lg:flex gap-20 hidden font-quicksand uppercase font-bold'>
                        <NavLink to="./">Home</NavLink>
                        <NavLink to="/about_us">About Us</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/contact_us">Contact Us</NavLink>
                    </ul>
                </div>

                <div className='lg:hidden text-2xl cursor-pointer'>
                    {
                        menuOpen ? (
                            <RxCross1 onClick={openmenu} />
                        ) : (
                            <VscMenu onClick={openmenu} />
                        )
                    }


                </div>

                {/* mobile menu */}
                {
                    menuOpen && (
                        <div className='lg:hidden absolute top-16 shadow-lg w-[100%] left-0 flex flex-col justify-center items-center p-4 bg-white'>
                            <ul className='flex flex-col gap-4 font-quicksand uppercase font-bold'>
                                <NavLink to="./" onClick={openmenu}>Home</NavLink>
                                <NavLink to="/about_us" onClick={openmenu}>About Us</NavLink>
                                <NavLink to="/services" onClick={openmenu}>Services</NavLink>
                                <NavLink to="/contact_us" onClick={openmenu}>Contact Us</NavLink>
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Navbar