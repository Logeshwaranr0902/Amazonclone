import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { logo } from "../../assets/index"
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { allItems } from '../../constants';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HeaderBottom from './HeaderBottom';

const Header = () => {
  const [showAll, setShowAll] = useState(false)

  return (
    <div className='w-full sticky top-0 z-50'>
      <div className='w-full bg-amazonBlue text-white px-4 py-3 flex items-center gap-4'>
        <div className='headerHover'>
          <img className='w-24 mt-2' src={logo} alt="logo" />
        </div>
        <div className='headerHover '>
          <LocationOnOutlinedIcon />
          <p className='text-xs text-lightText font-light flex flex-col'>
            Deliver to
            <span className='text-sm font-semibold -mt-1 text-whiteText'>
              Chennai
            </span>
          </p>
        </div>
        <div className='h-10 rounded-md flex flex-grow relative'>
          <span onClick={() => setShowAll(!showAll)} className='w-14 h-full flex items-center justify-center bg-gray-200
              hover:bg-gray-300 duration-300 text-sm font-titleFont border-2
               text-amazonBlue cursor-pointer  rounded-tl-md rounded-bl-md' >
            All <span></span>
            <ArrowDropDownOutlinedIcon /></span>
          <span>
            {showAll && (
              <div>
                <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden
                       bg-white border-[1px] border-amazonBlue text-black p-2 flex-col gap-1 z-50'>

                  {allItems.map(
                    (items) => (<li className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent
                          hover:border-b-amazonBlue cursor-pointer duration-200' key={items._id}>{items.title}</li>)
                  )
                  }
                </ul>
              </div>
            )}
          </span>
          <input
            className='h-full text-base text-amazonBlue flex-grow outline-none border-none px-2 '
            type='text'
          />
          <span className='w-12 h-full flex items-center justify-center bg-amazonYellow 
              hover:bg-[#f3a847] duration-300
               text-amazonBlue cursor-pointer  rounded-tr-md rounded-br-md'><SearchIcon />
          </span>

        </div>

        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lightText font-light'>Hello, sign in</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>Accounts & Lists <span><ArrowDropDownOutlinedIcon /></span></p>
        </div>

        <div className='flex flex-col items-start justify-center headerHover'>
          <p className='text-xs text-lightText font-light'>Returns</p>
          <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
        </div>
        <div className='flex items-start justify-center headerHover relative'>
          <ShoppingCartIcon />
          <p className='text-xs font-semibold mt-3 text-whiteText'>
            Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4
            bg-[#f3a847] text-amazonBlue rounded-full flex justify-center items-center'>0</span></p>
        </div>
      </div>
      <HeaderBottom />
    </div>
  )
}

export default Header