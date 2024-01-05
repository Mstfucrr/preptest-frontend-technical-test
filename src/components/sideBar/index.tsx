import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { PagesElement } from '../home';

//logo from public

type props = {
    isSideBarOpen: boolean,
    pagesElement: PagesElement[],
    activePage: PagesElement,
    setActivePage: React.Dispatch<React.SetStateAction<PagesElement>>

}

const SideBar = ({ isSideBarOpen, pagesElement, activePage, setActivePage }: props) => {

    // classes, exam module, Statics, Recommandation, Calendar
    return (
        <motion.div className="w-64 h-full bg-customColors-lightBg pl-8 relative border-[80_82_84_0.25] border border-solid"
            animate={{
                width: isSideBarOpen ? 270 : 0,
                scaleX: isSideBarOpen ? 1 : 0,
                opacity: isSideBarOpen ? 1 : 0,
                originX: 0,
                transition: {
                    duration: 0.5,

                },

            }}

        >

            {/* logo */}
            <div className="flex flex-col justify-start">

                <div className="flex mt-16 ">
                    <Image src={'/logo.svg'} className='w-full' width={200} height={30} />
                </div>

                {/* dashboard */}
                <div className="flex flex-row gap-3 mt-24 ">
                    <Image src={'/icons/dashboard.svg'} width={24} height={24} />
                    <p className="text-md font-medium text-customColors-darkTxt">Dashboard</p>
                </div>

                {/* pages */}

                {/* pages Title */}
                <div className="mt-9">
                    <p className="font-medium text-[#262626] uppercase poppins">Pages</p>
                </div>

                {/* pages element */}
                <div className="flex flex-col gap-7 mt-9">

                    {pagesElement.map((Element) => (
                        <button key={"page-" + Element.title} className="flex flex-row gap-3  text-primary-600"
                            onClick={() =>
                                setActivePage(Element)}
                        >
                            <Element.Icon fill={activePage.title === Element.title ? '#ec5523' : '#000000DE'} />

                            {/* 0, 0, 0, 0.87 */}
                            <p className={`text-md font-normal inter ${activePage.title === Element.title ? 'text-primary-600' : 'text-[#262626]'}`}>{Element.title}</p>
                        </button>
                    ))}
                </div>


                {/* ACCOUNT SETTINGS */}
                <div className="mt-28">
                    <p className="font-medium text-[#4C4E6480] uppercase poppins">Account Settings</p>
                </div>
                <div className="flex flex-col gap-y-7 mt-4">

                    {/* Message Board */}
                    <div className="flex flex-row gap-3 ">
                        <Image src={'/icons/message.svg'} width={24} height={24} />
                        <p className="text-sm font-normal poppins text-[#000000DE]">Message Board</p>
                    </div>
                    {/* Settings */}
                    <div className="flex flex-row gap-3">
                        <Image src={'/icons/settings.svg'} width={24} height={24} />
                        <p className="text-sm font-normal poppins text-[#000000DE]">Settings</p>
                    </div>
                    {/* Logout */}
                    <div className="flex flex-row gap-3">
                        <Image src={'/icons/logout.svg'} width={24} height={24} />
                        <p className="text-sm font-normal poppins text-[#000000DE]">Logout</p>
                    </div>
                    {/* Terms & Conditions */}
                    <div className="flex flex-row gap-3">
                        <Image src={'/icons/terms.svg'} width={24} height={24} />
                        <p className="text-sm font-normal poppins text-[#000000DE]">Terms & Conditions</p>
                    </div>
                </div>

            </div>

        </motion.div>
    )
}

export default SideBar