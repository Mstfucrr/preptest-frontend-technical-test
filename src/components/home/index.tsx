import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import SideBar from '../sideBar'
import TopBar from '../topBar'
import StatisticCard from '../statisticCard'
import TestCardComponent from '../testCard'
import TestTitle from '../testTitle'
import dynamic from 'next/dynamic';
import { TestCard } from 'src/types/types'




const HomeComponent = () => {

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

    const lockedTestCards: TestCard[] = [
        {
            id: 1,
            title: 'Data Analysis-1',
            testCount: 1,
            subtopicCount: 10,
            questionCount: 55,
            time: 60,
            difficulty: 25,
            isDone: false,
            isLocked: true
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
            isLocked: true
        }
    ]

    const MotionLink = dynamic(() => import('framer-motion').then((mod) => mod.motion.a), { ssr: false });


    return (
        <div className="lg:w-4/5 xl:w-3/5 w-full mx-auto flex lg:flex-row items-start h-screen">
            <div className="flex relative w-auto min-h-screen">
                <div className="lg:flex hidden">
                    <SideBar />
                </div>
            </div>
            {/* main content */}
            <div className="flex w-full flex-col px-9 mb-5 max-h-screen overflow-y-auto">

                {/* topbar */}
                <TopBar />
                <div className="flex w-full">
                    <div className="flex w-full h-16 bg-customColors-orangeBg rounded-2xl text-orangeText items-center justify-between">
                        <motion.button className="flex ml-4 items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image src={'/icons/arrow-left.svg'} width={16} height={16} />
                            <p className="text-lg font-semibold ml-3 poppins">
                                Fonksionlar
                            </p>
                        </motion.button>
                        <div>
                            <p className="text-2xl font-semibold leading-normal mr-4 poppins uppercase"> Test </p>
                        </div>
                        <motion.button className="flex mr-4 items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <p className="text-lg font-semibold mr-3 poppins">
                                Polinomlar
                            </p>
                            <Image src={'/icons/arrow-right.svg'} width={16} height={16} />
                        </motion.button>
                    </div>
                </div>
                {/* content */}
                <div className="flex flex-row flex-wrap gap-y-4 mt-7">
                    {/* notes card */}
                    <MotionLink className='flex w-full xl:w-2/3 sm:min-w-[35rem] max-h-72 flex-col justify-around items-center p-6 
                    rounded-xl bg-gradient-to-b from-customColors-orangeBg via-transparent to-[rgba(255,123,93,0.40)]
                    hover:shadow-lg transition duration-300 ease-in-out relative '
                        href='/notes'
                    >

                        {/* title */}
                        <p className="text-orangeText uppercase text-2xl font-medium">Notes: Data Analysis</p>
                        {/* card content */}
                        <div className="flex flex-row w-full px-6 gap-6 h-full">

                            <div className="flex gap-3">
                                <div className="bg-[#FFBCAD] w-32 h-44 flex items-center justify-center rounded-3xl">
                                    <Image src="/images/dataAnalysis.png" width={"100%"} height={"100%"} />
                                </div>
                            </div>

                            <p className="text-left text-[#262626] text-lg font-normal poppins w-full h-full overflow-hidden">

                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptas.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quis autem molestiae iste sint nemo maxime, labore error quod eligendi praesentium beatae aperiam vel architecto quae fugiat adipisci. Ea, dicta.
                            </p>
                        </div>

                        {/* read more */}
                        <div className="absolute w-full h-14 bottom-0 bg-customColors-orangeBg blur-2xl" />
                        {/* button */}


                        <motion.a
                            className='flex justify-center items-center gap-3 py-2 px-6 mb-4 bg-orangeText rounded-full absolute bottom-0'
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            href='/notes'>
                            <p className="text-customColors-lightBg font-medium">Read More</p>
                            <Image src="/icons/arrow-bottom.svg" width={17} height={17} />

                        </motion.a>
                    </MotionLink>

                    {/* statistic card */}
                    <StatisticCard />

                    {/* Test Title */}
                    <TestTitle title="NON-Generated Test" description="These are tests specially prepared by our teachers." isNonGeneretad={true} />
                    {/* Data Analysis cars 1-2 */}
                    <div className="w-full grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-7">
                        {testCards.map((testCard) => (
                            <TestCardComponent testCard={testCard} key={"testcard-" + testCard.id} />
                        ))}
                    </div>

                    {/* Test Title */}
                    <TestTitle title="Generated Test" description="These are tests specially prepared by our teachers." isNonGeneretad={false} />
                    {/* Data Analysis cars 1-2 */}
                    <div className="w-full grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-7">
                        {lockedTestCards.map((testCard) => (
                            <TestCardComponent testCard={testCard} key={"testcard-" + testCard.id} />
                        ))}
                    </div>

                    {/* Test Title */}
                    <TestTitle title="NON-Generated Test" description="These are tests specially prepared by our teachers." isNonGeneretad={true} />
                    {/* Data Analysis cars 1-2 */}
                    <div className="w-full grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-7">
                        {testCards.map((testCard) => (
                            <TestCardComponent testCard={testCard} key={"testcard-" + testCard.id} />
                        ))}
                    </div>

                    {/* Test Title */}
                    <TestTitle title="Generated Test" description="These are tests specially prepared by our teachers." isNonGeneretad={false} />
                    {/* Data Analysis cars 1-2 */}
                    <div className="w-full grid grid-rows-1 lg:grid-cols-2 grid-cols-1 gap-7">
                        {lockedTestCards.map((testCard) => (
                            <TestCardComponent testCard={testCard} key={"testcard-" + testCard.id} />
                        ))}
                    </div>

                </div>
            </div >
        </div >
    )
}

export default HomeComponent