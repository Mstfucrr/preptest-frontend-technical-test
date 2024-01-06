import React from 'react'

type Props = {
    title: string;
    description: string;
    isNonGeneretad: boolean;
}

const TestTitle = (props: Props) => {
    return (

        <div className={`flex w-full h-[90px] p-6 py-10 ${props.isNonGeneretad ? 'bg-customColors-orangeBg' : 'bg-[rgb(181,214,216,0.25)]'} rounded-2xl items-center relative justify-between`}>
            <div className="flex flex-col z-10">
                <p className="text-xl font-semibold text-[#505254] px-6 poppins">{props.title}</p>
                <p className="text-sm font-normal text-[#505254BF] px-6 poppins">{props.description}</p>
            </div>
            <div className="blur-sm absolute top-1 -right-6">
                <img src="/images/non.png"
                    alt="non"
                    className="w-[230px] object-cover max-h-20 object-top -z-10" />
            </div>

        </div>
    )
}

export default TestTitle