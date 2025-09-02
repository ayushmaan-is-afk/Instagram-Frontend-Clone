import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Direct_messages = () => {
    return (
        <div className='flex flex-row gap-3 cursor-pointer px-9 pt-4 rounded-lg grow'>
            <div className="flex ">
                <Avatar className={"size-13"}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex flex-col gap-1">
                <span className="text-x text-sidebar-foreground px-2">XYZ</span>
                <span className="text-xs text-sidebar-foreground px-2">Seen 10 mins ago</span>
            </div>
        </div>
    )
}

export default Direct_messages



























