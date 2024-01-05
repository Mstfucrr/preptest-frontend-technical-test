import React from 'react'
import Image from 'next/image'
import { FaChevronRight } from 'react-icons/fa'

const StatisticCard = () => {

    const getStatics = () => {
        return 75
    }
    // Overall Progress , Overall Success, General Level
    const OverallProgress = () => {
        return 75
    }

    const OverallSuccess = () => {
        return 75
    }

    const GeneralLevel = () => {
        return 75
    }
    return (
        <div className="pl-4 pt-4 w-full lg:w-1/3 h-72 flex">

            <div className='flex flex-col gap-6 px-7 justify-around items-center w-full h-full min-w-[20rem] p-6 rounded-xl bg-gradient-to-b from-[#B5D6D8] to-[#FFF2E680]'>
                <div className="bg-white flex flex-col w-full h-16 rounded-3xl px-7 py-2 poppins font-semibold text-[#505254]">
                    <p> Data Analys. Level <FaChevronRight className="inline" /> </p>
                    <div className="flex flex-row gap-3 h-full items-center justify-between">
                        <div className="bg-[#FFDFD7] w-3/4 h-2">
                            <div className="h-full rounded-3xl bg-gradient-to-r from-[#FFDDD600] to-[#FA4100]"
                                style={{ width: `${getStatics()}%` }}>
                            </div>
                        </div>
                        <p> {getStatics()}% </p>
                    </div>
                </div>
                <div className="bg-white w-full h-full rounded-3xl px-7 py-2 poppins">
                    {/* Overall Progress , Overall Success, General Level */}
                    <div className="flex flex-row gap-3 h-full items-center justify-between">
                        {/* Overall Progress */}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="bg-transparent w-16 h-16">
                                <Image src="/statisticBars/OverallProgress.svg" width={120} height={120} />
                            </div>
                            <div className="flex items-center flex-col justify-center max-w-28 text-center">
                                <p> {OverallProgress()}% </p>
                                <p className="text-[#505254] text-sm">Overall Progress</p>
                            </div>
                        </div>
                        {/* Overall Success */}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="bg-transparent w-16 h-16">
                                <Image src="/statisticBars/OverallProgress.svg" width={120} height={120} />
                            </div>
                            <div className="flex items-center flex-col justify-center max-w-28 text-center">
                                <p> {OverallSuccess()}% </p>
                                <p className="text-[#505254] text-sm">Overall Success</p>
                            </div>
                        </div>

                        {/* General Level */}
                        <div className="flex flex-col items-center justify-center gap-2">
                            <div className="bg-transparent w-16 h-16">
                                <Image src="/statisticBars/OverallProgress.svg" width={120} height={120} />
                            </div>
                            <div className="flex items-center flex-col justify-center max-w-28 text-center">
                                <p> {GeneralLevel()}% </p>
                                <p className="text-[#505254] text-sm">General Level</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticCard