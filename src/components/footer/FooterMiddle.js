import React from 'react'
import { middleList } from '../../constants';
import FooterMiddleList from './FooterMiddleList';
import { logo, indflag } from "../../assets/index";

const FooterMiddle = () => {
    return (
        <div className="w-full bg-amazonLight text-white">

            <div className="w-full border-b-[1px] border-gray-500 py-10">
                <div className="max-w-5xl mx-auto text-gray-300">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 place-items-center items-start px-6 gap-10 lgl:gap-4">
                        {middleList.map((item) => (
                            <FooterMiddleList
                                key={item._id}
                                title={item.title}
                                listItem={item.listItem}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="w-full flex gap-6 items-center justify-center py-6">
                <div>
                    <img className="w-20 pt-3" src={logo} alt="logo" />
                </div>
                <div className="flex gap-2">
                    <p className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazonYellow cursor-pointer duration-200 px-2 py-1">
                        English
                    </p>
                </div>
                <div className="flex gap-1 items-center justify-center border border-gray-500 hover:border-amazonYellow cursor-pointer duration-200 px-2 py-1">
                    <img className="w-6" src={indflag} alt="flagImg" />
                    <p>India</p>
                </div>
            </div>
            {/* ============ Bottom End here ================= */}
        </div>
    );
}

export default FooterMiddle