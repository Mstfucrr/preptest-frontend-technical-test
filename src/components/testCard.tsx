
import React from 'react'
import { TestCard } from './home';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';

type Props = {
    testCard: TestCard;

}

const TestCardComponent = ({ testCard }: Props) => {



    const InfoBlock = ({ value, label }: { value: any; label: string }) => (
        <div className="flex justify-between items-center">
            <div className="bg-orangeText border-[3px] w-16 h-9 items-center flex justify-center border-solid rounded-2xl text-sm font-semibold text-white">
                {value}
            </div>
            <p className="text-[#505254] text-sm font-semibold ml-3">{label}</p>
        </div>
    );

    return (
        <div className=" h-auto w-full">
            <div className="w-full h-full bg-customColors-orangeBg rounded-3xl p-5 poppins ">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[#505254] text-2xl font-medium">{testCard.title}</h3>
                    <h5 className="text-[#505254]">
                        TEST : {testCard.testCount}
                    </h5>
                </div>
                <div className="flex flex-col gap-3 mt-6">
                    {/* info block */}
                    <div className="flex flex-row flex-wrap gap-6 relative">

                        <div className="flex flex-col items-start gap-3">

                            {/* subtopics */}
                            <InfoBlock value={testCard.subtopicCount} label="Subtopics" />

                            {/* time */}
                            <InfoBlock value={testCard.time} label="Time" />
                        </div>

                        <div className="flex flex-col items-start gap-3">

                            {/* questions */}

                            <InfoBlock value={testCard.questionCount} label="Questions" />

                            {/* difficulty */}
                            <InfoBlock value={testCard.difficulty} label="Difficulty" />


                        </div>

                        {/* key image */}
                        <div className="!max-w-44">

                            <div className="absolute -top-2/3 right-28 blur-[7px] max-w-11">
                                <img src="/images/key.png" alt="key"
                                    className="min-w-[170px] object-cover object-left h-[240px]"
                                />

                            </div>
                        </div>
                    </div>

                    {/* button */}
                    <motion.button className="bg-[#6FB2B8] p-3 backdrop-blur-[1px] w-48 text-white rounded-3xl mt-3
                        flex justify-center items-center gap-2"
                        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        whileTap={{ scale: 1 }}
                    >
                        Start Now <FaChevronRight />

                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default TestCardComponent