import React from 'react'
import Image from 'next/image'

const TopBar = () => {
    return (
        <div className="flex w-full flex-col gap-7 my-9">
            <div className="flex w-full h-auto justify-end gap-3">
                <Image src={'/avatar/avatar2.svg'} width={40} height={40} />
                <Image src={'/avatar/avatar.png'} width={40} height={40} />
            </div>

        </div>
    )
}

export default TopBar