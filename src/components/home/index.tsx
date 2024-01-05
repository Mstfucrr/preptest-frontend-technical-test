import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import Image from 'next/image'
import SideBar from '../sideBar'
import { classesIcon, examIcon, staticsIcon, recommandationIcon, calendarIcon } from '../sideBar/icons'
import TopBar from '../topBar'
import StatisticCard from '../statisticCard'
import TestCardComponent from '../testCard'

export interface PagesElement {
    title: string;
    Icon: React.FC<{ fill: string }>; // Update the type to accept an `fill` prop
}

export interface TestCard {
    id: number;
    title: string;
    testCount: number;
    questionCount: number;
    subtopicCount: number;
    time: number;
    difficulty: number;
    isDone: boolean;
    isLocked: boolean;
}

const HomeComponent = () => {
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


    const testCards: TestCard[] = [
        {
            id: 1,
            title: 'Data Analysis-1',
            testCount: 1,
            subtopicCount: 10,
            questionCount: 55,
            time: 60,
            difficulty: 25,
            isDone: true,
            isLocked: false
        },
        {
            id: 2,
            title: 'Data Analysis-2',
            testCount: 2,
            subtopicCount: 10,
            questionCount: 55,
            time: 60,
            difficulty: 25,
            isDone: false,
            isLocked: false
        }
    ]




    return (
        <div className="lg:w-4/5 xl:w-3/5 w-full mx-auto flex lg:flex-row items-start">
            <div className="flex relative w-auto h-screen">
                <div className="lg:flex hidden">

                    <AnimatePresence>
                        <SideBar isSideBarOpen={isSideBarOpen} pagesElement={pagesElement} activePage={activePage} setActivePage={setActivePage} />

                        {/* sidebar close icon */}
                        <div className="">
                            {/* < or > */}
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
                        </div>
                    </AnimatePresence>
                </div>
            </div>
            {/* main content */}
            <div className="flex w-full flex-col gap-7 px-9 my-5">

                {/* topbar */}
                <TopBar />
                {/* content */}
                <div className="flex flex-row flex-wrap gap-y-4">
                    {/* notes card */}
                    <motion.button className='flex w-full xl:w-2/3 sm:min-w-[35rem] max-h-72 flex-col justify-around items-center  p-6 
                    rounded-xl bg-gradient-to-b from-customColors-orangeBg via-transparent to-[rgba(255,123,93,0.40)]
                    hover:shadow-lg transition duration-300 ease-in-out relative '>

                        {/* title */}
                        <p className="text-orangeText uppercase text-2xl font-medium">Notes: Data Analysis</p>
                        {/* card content */}
                        <div className="flex flex-row w-full px-6 gap-6 h-full">

                            <div className="flex gap-3">
                                <div className="bg-[#FFBCAD] w-32 h-44 flex items-center justify-center rounded-3xl">
                                    <Image src="/images/dataAnalysis.png" width={"100%"} height={"100%"} />
                                </div>
                            </div>

                            {/* yazı aşağıya doğrı blurlu olsun */}
                            <p className="text-left text-[#262626] text-lg font-normal poppins
                            w-full h-full overflow-hidden">

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quis autem molestiae iste sint nemo maxime, labore error quod eligendi praesentium beatae aperiam vel architecto quae fugiat adipisci. Ea, dicta.
                            </p>
                        </div>

                        {/* read more */}
                        <div className="absolute w-full h-14 bottom-0 bg-customColors-orangeBg blur-2xl" />
                        {/* button */}
                        <motion.button
                            className='flex justify-center items-center gap-3 py-2 px-6 mb-4 bg-orangeText rounded-full absolute z-10 bottom-0'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                        >
                            <p className="text-customColors-lightBg font-medium">Read More</p>
                            <Image src="/icons/arrow-bottom.svg" width={17} height={17} />

                        </motion.button>


                    </motion.button>

                    {/* statistic card */}
                    <StatisticCard />

                    {/* NON-Generated Test */}
                    <div className="flex w-full h-[90px] p-6 py-10 bg-customColors-orangeBg rounded-2xl text-orangeText items-center relative justify-between z-10">
                        <div className="flex flex-col z-10">
                            <p className="text-xl font-semibold text-[#505254] px-6 poppins">NON-Generated Test</p>
                            <p className="text-sm font-normal text-[#505254BF] px-6 poppins">These are tests specially prepared by our teachers.</p>
                        </div>
                        <div className="blur-sm absolute top-1 -right-6">
                            <img src="/images/non.png"
                                alt="non"
                                className="w-[230px] object-cover max-h-20 object-top -z-10" />
                        </div>

                    </div>

                    {/* Data Analysis cars 1-2 */}
                    <div className="w-full grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-7">
                        {testCards.map((testCard) => (
                            <TestCardComponent testCard={testCard} key={"testcard-" + testCard.id} />
                        ))}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default HomeComponent