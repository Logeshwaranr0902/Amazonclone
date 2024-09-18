import React, { useEffect, useState, useRef } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from "framer-motion"
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';



const HeaderBottom = () => {
    const ref = useRef();
    const [sideBar, setSideBar] = useState(false)
    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            if (e.target.contains(ref.current)) {
                setSideBar(false)
            }
        })
    }, [ref, sideBar])
    return (
        <div className='w-full px-4 h-[36px] bg-amazonLight text-white flex items-center'>
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li onClick={() => setSideBar(true)} className='headerHover flex items-center gap-1'><span><MenuIcon /></span>All</li>
                <li className='hidden md:inline-flex headerHover'>Today's Deals</li>
                <li className='hidden md:inline-flex headerHover'>Customer Service</li>
                <li className='hidden md:inline-flex headerHover'>Gift Cards</li>
                <li className='hidden md:inline-flex headerHover'>Registry</li>
                <li className='hidden md:inline-flex headerHover'>Sell</li>
            </ul>
            {sideBar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazonBlue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <motion.div ref={ref} initial={{ x: -500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5 }} className="w-[290px] md:w-[350px] h-full bg-white border border-black">
                            <div className='w-full bg-amazonLight text-white py-2 px-6 flex items-center gap-4 '>
                                <AccountCircleIcon /> <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign In</h3>
                            </div>
                            <div className=' h-full overflow-scroll'>
                                <SideNavContent
                                    title="Digital Content & Devices"
                                    one="Amazon Music"
                                    two="Kindle E-readers & Books"
                                    three="Amazon Appstore"
                                />
                                <SideNavContent
                                    title="Shop By Department"
                                    one="Electronics"
                                    two="Computers"
                                    three="Smart Home"
                                />
                                <SideNavContent
                                    title="Programs & Features"
                                    one="Gift Cards"
                                    two="Amazon live"
                                    three="International Shopping"
                                />
                                <SideNavContent
                                    title="Help & Settings"
                                    one="Your Account"
                                    two="Customer Service"
                                    three="Report Bug"
                                />
                                <span
                                    onClick={() => setSideBar(false)}
                                    className="cursor-pointer absolute top-0 left-[300px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
                                >
                                    <CloseIcon />
                                </span>
                            </div>
                        </motion.div >

                    </div>

                </div>)
            }
        </div >
    )
}

export default HeaderBottom