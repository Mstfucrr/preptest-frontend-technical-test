import React, { useEffect } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import StatisticComponent from './statisticComponent'

const StatisticCard = () => {

    const [statistics, setStatistics] = React.useState(0)

    const getStatics = () => {
        return 59
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setStatistics(statistics => getStatics() > statistics ? statistics + 1 : statistics)
        }, 10);

        return () => clearInterval(interval);
    }, []);

    // Overall Progress , Overall Success, General Level
    const OverallProgress = () => {
        return 70
    }

    const OverallSuccess = () => {
        return 85
    }

    const GeneralLevel = () => {
        return 3.4
    }

    return (
        <div className="pl-4 pt-4 w-full lg:w-1/3 h-72 flex">

            <div className='flex flex-col gap-6 px-7 justify-around items-center w-full h-full min-w-[20rem] p-6 rounded-xl bg-gradient-to-b from-[#B5D6D8] to-[#FFF2E680]'>
                <div className="bg-white flex flex-col w-full h-16 rounded-3xl px-7 py-2 poppins font-semibold text-[#505254]">
                    <p> Data Analys. Level <FaChevronRight className="inline" /> </p>
                    <div className="flex flex-row gap-3 h-full items-center justify-between">
                        <div className="bg-[#FFDFD7] w-3/4 h-2">
                            <div className="h-full rounded-3xl bg-gradient-to-r from-[#FFDDD600] to-[#FA4100]"
                                style={{ width: `${statistics}%` }}>
                            </div>
                        </div>
                        <p> {statistics}% </p>
                    </div>
                </div>
                <div className="bg-white w-full h-full rounded-3xl px-7 py-2 poppins">
                    {/* Overall Progress , Overall Success, General Level */}
                    <div className="flex flex-row gap-3 h-full items-center justify-between">
                        {/* Overall Progress */}
                        <StatisticComponent backgroundClass="bg-OverallLayout" imagePath="Overall.png" value={`${OverallProgress()}%`} label="Overall Progress" />

                        {/* Overall Success */}
                        <StatisticComponent backgroundClass="bg-OverallSuccessLayout" imagePath="OverallSuccess.png" value={`${OverallSuccess()}%`} label="Overall Success" />

                        {/* General Level */}
                        <StatisticComponent backgroundClass="bg-GeneralLevelLayout" imagePath="GeneralLevel.png" value={`${GeneralLevel()}`} label="General Level" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatisticCard