import { useState } from "react";
import { generateData, cn, currentDate } from "./utils"
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

const days = ['日', 'M', 'T', 'W', 'T', 'F', 'S'];

const Calender = () => {
    const [today, setToday] = useState(currentDate);

    const goToMonth = (index: number) => {
        setToday(today.month(today.month() + index));
    }

    return (
        <div className="w-96 h-96 font-bold">
            <h1 className="font-normal">Room Booking Calender</h1>
            <div className="flex justify-between items-center h-7">
                <div>
                    <GrFormPrevious className="w-5 h-5 cursor-pointer" onClick={() => goToMonth(-1)} />
                </div>
                <h1>{today.year() + "/" + Number(today.month() + 1)}</h1>
                <div><GrFormNext className="w-5 h-5 cursor-pointer" onClick={() => goToMonth(1)} /></div>

            </div>
            <div className="grid grid-cols-7 bg-blue-100 rounded-full h-7 my-3">
                {days.map((day, index) => {
                    return <h1 key={index} className="grid place-content-center">{day}</h1>
                })}
            </div>
            <div className="grid grid-cols-7">
                {generateData(today.year(), today.month()).map(({ date, currentMonth, today }, index) => {
                    return (
                        <div key={index} className="h-14 grid place-content-center">
                            <h1 className={cn(
                                currentMonth ? "" : "text-gray-400",
                                today ? "bg-blue-400 text-white" : "",
                                "h-10 w-10 rounded-full hover:bg-black hover:text-white transition-all cursor-pointer grid place-content-center"
                            )}> {date.date()}</h1>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Calender