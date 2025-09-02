import React from 'react'
import { Avatar,AvatarFallback,AvatarImage } from '@radix-ui/react-avatar'
const Dis_pic = () => {
    return (
        <div>
            <Avatar className={"size-13"}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default Dis_pic
