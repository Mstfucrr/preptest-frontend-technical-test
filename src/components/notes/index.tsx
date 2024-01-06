

import React from 'react'
import SideBar from '../sideBar'
import TopBar from '../topBar/topBar'
import { FaChevronLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'


const NotesComponent = () => {
    return (
        <div className="xl:w-4/5 w-full mx-auto flex lg:flex-row items-start h-screen">
            <div className="flex relative w-auto min-h-screen">
                <div className="lg:relative absolute lg:top-0 lg:left-0 w-full h-screen z-50">
                    <SideBar />
                </div>
            </div>
            <div className="flex w-full flex-col px-9 mb-5 max-h-screen overflow-y-auto overflow-x-hidden">

                <TopBar />

                {/* navbar */}
                <motion.a className="w-min flex items-center ml-5 gap-3"
                    whileHover={{ scaleX: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    href="/home" >
                    {/*sadece turuncu left arrow ve NOTES yazısı */}
                    <FaChevronLeft className="text-orangeText text-3xl" />
                    <span className="text-orangeText text-3xl font-bold poppins">NOTES</span>

                </motion.a>

                {/* note content */}
                <motion.div className="bg-customColors-orangeBg h-full rounded-3xl w-full m-5 p-11 poppins"
                    initial={{ scaleY: 0, height: 0, originY: 0 }}
                    animate={{ scaleY: 1, height: 'auto' }}
                    transition={{ duration: 0.7 }}

                >
                    {/* title */}
                    <div className="flex w-full h-16 justify-center items-center">
                        <h1 className="text-3xl font-semibold  text-orangeText uppercase">Data Analysis</h1>
                    </div>
                    {/* subtitle */}
                    <div className="ml-11 mt-8">
                        <h3 className="text-xl font-medium  text-orangeText uppercase">CHAPTER ONE</h3>
                    </div>
                    {/* content */}
                    <p className=" font-normal text-[#555] mt-3">
                        Lorem ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient tincidunt luctus nunc. Proin cras enim maecenas in tincidunt. Dui tristique lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies aliquam ut arcu lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit egestas viverra egestas mauris nunc. Malesuada suspendisse sit quis nulla nibh eros. Enim dignissim montes aliquam dictum. Varius arcu nisi scelerisque nunc tempus rhoncus ipsum. Velit eget eros ut sodales. Faucibus feugiat cursus est magna commodo eu. unc. Malesuada suspendisse sit quis nulla nibh eros. Enim dignissim montes aliquam dictum. Varius arcu nisi scelerisque nunc tempus rhoncus ipsum. Velit eget eros ut sodales. Faucibus feugiat cursus est magna commodo eu.unc. Malesuada suspendisse sit quis nulla nibh eros. Enim dignissim montes aliquam dictum. Varius arcu nisi scelerisque nunc tempus rhoncus ipsum. Velit
                    </p>

                    <div className="flex my-4 flex-row flex-wrap">
                        <div className="md:w-7/12 w-full h-auto mt-4 md:pr-3">
                            <div className=" w-full h-full py-4 bg-gradient-to-b from-[#B5D6D8] via-[#B5D6D8] to-[#FFE3C9] rounded-3xl flex items-center justify-center">
                                <div className="flex flex-col px-14 text-[#555] ">
                                    {/* title */}
                                    <h4 className="text-lg font-bold uppercase">KEEP IN MIND!</h4>
                                    {/* content */}
                                    <p className='text-sm font-normal'>
                                        Lorem ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient tincidunt luctus nunc. Proin cras enim maecena
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-5/12 w-full h-auto mt-4 md:pl-3">
                            <div className="w-full h-full bg-gradient-to-b from-[#FFD3AB] via-[#FFD3AB] to-[#93C2C4] rounded-3xl flex items-center justify-center">
                                <img src="/images/non.png"
                                    alt='non'
                                    className='w-full h-52 object-scale-down p-3'
                                />
                            </div>
                        </div>

                    </div>

                    {/* subtitle */}
                    <div className="ml-11 mt-20">
                        <h3 className="text-xl font-medium  text-orangeText uppercase">ANOTHER CHAPTER</h3>
                    </div>
                    {/* content */}
                    <p className=" font-normal text-[#555] mt-3">
                        Lorem ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient tincidunt luctus nunc. Proin cras enim maecenas in tincidunt. Dui tristique lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies aliquam ut arcu lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit egestas viverra egestas mauris nunc. Malesuada suspendisse sit quis nulla nibh eros. Enim dignissim montes aliquam dictum. Varius arcu nisi scelerisque nunc tempus rhoncus ipsum. Velit eget eros ut sodales. Faucibus feugiat cursus est magna commodo eu. enas in tincidunt. Dui tristique lacus risus vitae adipiscing sagittis enim porttitor. A consequat ultricies aliquam ut arcu lorem. Est mus libero sit vel ac in at pulvinar. Orci ipsum sit egestas viverra egestas mauris nunc. Malesuada suspendisse sit quis nulla nibh eros. Enim
                    </p>

                    {/* subtitle */}
                    <div className="ml-11 mt-20">
                        <h3 className="text-xl font-medium  text-orangeText uppercase">ANOTHER CHAPTER</h3>
                    </div>

                    {/* content */}
                    <p className=" font-normal text-[#555] mt-3">
                        Lorem ipsum dolor sit amet consectetur. Proin fermentum pellentesque sed non. Mauris enim feugiat volutpat feugiat sed. Adipiscing amet malesuada a in neque pellentesque turpis suspendisse. Urna sed in ornare proin proin parturient tincidunt luctus nunc. Proin c
                    </p>

                    {/* subtitle */}
                </motion.div>

            </div>


        </div>
    )
}

export default NotesComponent

