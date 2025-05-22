import GlobalChat from '@/component/Chat/GlobalChat'
import RoomChat from '@/component/Chat/RoomChat'
import Navbar from '@/component/Navbar'
import NavInfo from '@/component/NavInfo'
import { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const Chat = () => {
    const [IsGlobal, setIsGlobal,] = useState(localStorage.getItem('IsGlobal') === 'true')
    localStorage.setItem('IsGlobal', JSON.stringify(IsGlobal))


    return (
        <div>
            <Navbar />
            <NavInfo title={` ${IsGlobal ? 'Global' : 'Room'} Chat`} />
            {/* use select to setIsGlobal to true or false */}
            <div className='w-full flex justify-end pr-10'>

                <div className="w-48 my-4 ">
                    <Select defaultValue={IsGlobal? "global" : "room"} onValueChange={(value) => setIsGlobal(value === "global")}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Chat Type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="global">Global</SelectItem>
                            <SelectItem value="room">Room</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            {IsGlobal ? <GlobalChat /> : <RoomChat />}

        </div>
    )
}

export default Chat
