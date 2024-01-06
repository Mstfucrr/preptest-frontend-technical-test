import React from 'react'
import Image from 'next/image'

const TopBar = () => {

    const getIsUserOnline = () => {
        return true
    }

    return (
        <div className="flex w-full flex-col gap-7 my-9">
            <div className="flex w-full h-auto justify-end gap-3">
                <Image src={'/avatar/avatar2.svg'} width={40} height={40} />
                <div className="relative flex items-end justify-end">
                    <Image src={'/avatar/Avatar.png'} width={40} height={40} />
                    {getIsUserOnline() && <div className="absolute w-2 h-2 bg-green-400 rounded-full"></div>}
                </div>
            </div>

        </div>
    )
}

export default TopBar