import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion';
import { classesIcon, examIcon, staticsIcon, recommandationIcon, calendarIcon } from './icons';
import { PagesElement } from 'src/types/types';

//logo from public
const SideBar = () => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(true)

    const pagesElement = [
        {
            title: 'Classes',
            Icon: classesIcon,
        },
        {
            title: 'Exam Module',
            Icon: examIcon,
        },
        {
            title: 'Statics',
            Icon: staticsIcon,
        },
        {
            title: 'Recommandation',
            Icon: recommandationIcon,
        },
        {
            title: 'Calendar',
            Icon: calendarIcon,
        }
    ] as PagesElement[];

    const [activePage, setActivePage] = useState<PagesElement>(pagesElement[0])


    // classes, exam module, Statics, Recommandation, Calendar
    return (
        <>
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
                    <button className="flex flex-row gap-3 mt-24 ">
                        <Image src={'/icons/dashboard.svg'} width={24} height={24} />
                        <p className="text-md font-medium text-customColors-darkTxt">Dashboard</p>
                    </button>

                    {/* pages */}

                    {/* pages Title */}
                    <div className="mt-9">
                        <p className="font-medium text-[#262626] uppercase poppins">Pages</p>
                    </div>

                    {/* pages element */}
                    <div className="flex flex-col gap-7 mt-9">

                        {pagesElement.map((Element, index) => (
                            <motion.button key={"page-" + Element.title} className="flex flex-row gap-3  text-primary-600"
                                onClick={() =>
                                    setActivePage(Element)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: -100 }}
                                // animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                                animate={{
                                    x: isSideBarOpen ? 0 : -50,
                                    opacity: isSideBarOpen ? 1 : 0,
                                    transition: { delay: index * 0.1 }
                                }}

                            >
                                <Element.Icon fill={activePage.title === Element.title ? '#ec5523' : '#000000DE'} />

                                {/* 0, 0, 0, 0.87 */}
                                <p className={`text-md font-normal inter ${activePage.title === Element.title ? 'text-primary-600' : 'text-[#262626]'}`}>{Element.title}</p>
                            </motion.button>
                        ))}
                    </div>


                    {/* ACCOUNT SETTINGS */}
                    <div className="mt-28">
                        <p className="font-medium text-[#4C4E6480] uppercase poppins">Account Settings</p>
                    </div>
                    <div className="flex flex-col gap-y-7 mt-4">

                        {/* Message Board */}
                        <button className="flex flex-row gap-3 ">
                            <Image src={'/icons/message.svg'} width={24} height={24} />
                            <p className="text-sm font-normal poppins text-[#000000DE]">Message Board</p>
                        </button>
                        {/* Settings */}
                        <button className="flex flex-row gap-3">
                            <Image src={'/icons/settings.svg'} width={24} height={24} />
                            <p className="text-sm font-normal poppins text-[#000000DE]">Settings</p>
                        </button>
                        {/* Logout */}
                        <button className="flex flex-row gap-3">
                            <Image src={'/icons/logout.svg'} width={24} height={24} />
                            <p className="text-sm font-normal poppins text-[#000000DE]">Logout</p>
                        </button>
                        {/* Terms & Conditions */}
                        <button className="flex flex-row gap-3">
                            <Image src={'/icons/terms.svg'} width={24} height={24} />
                            <p className="text-sm font-normal poppins text-[#000000DE]">Terms & Conditions</p>
                        </button>
                    </div>

                </div>

            </motion.div>
            {/* sidebar close icon */}
            <button className={`flex justify-center items-center w-12 h-12 bg-customColors-lightBg rounded-full absolute cursor-pointer`}
                onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                style={{
                    transform: isSideBarOpen ? 'rotate(0deg)' : 'rotate(180deg)',
                    top: '65px',
                    transformOrigin: 'center',
                    left: isSideBarOpen ? '90%' : '1%',
                    transition: 'all 0.55s '
                }}
            >
                <div className="text-customColors-lightText text-2xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-customColors-lightText" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M15 19l-7-7 7-7" />
                    </svg>
                </div>

            </button>
        </>

    )
}

export default SideBar