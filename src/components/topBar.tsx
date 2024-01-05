import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

const TopBar = () => {
    return (
        <div className="flex w-full flex-col gap-7 my-9">
            <div className="flex w-full h-auto justify-end gap-3">
                <Image src={'/avatar/avatar2.svg'} width={40} height={40} />
                <Image src={'/avatar/avatar.png'} width={40} height={40} />
            </div>
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
        </div>
    )
}

export default TopBar