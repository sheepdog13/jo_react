import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";

const ClockComp = () => {
    const [time, setTime] = useState(new Date())
    // 1초마다 반복하기위한 setIntervel 사용
    useEffect(()=>{
        setInterval(() => {
            setTime(new Date())
        }, 1000);
    },[])
    
    // useMemo 지정한 state 값이 바뀌지 않는다면, 이전의 return 값을 그래로 쓸수 있다
    const hours = useMemo(()=>{
        let stringHour = String(time.getHours())
        return stringHour.padStart(2,"0")
    },[time])

    const minutes = useMemo(()=>{
        let stringMinutes = String(time.getMinutes())
        return stringMinutes.padStart(2,"0")
    },[time])

    const seconds = useMemo(()=>{
        let stringSeconds = String(time.getSeconds())
        return stringSeconds.padStart(2,"0")
    },[time])

    return (
        <div>
            <h1>{hours}: {minutes}:{seconds}</h1>
        </div>
    );
}
 
export default ClockComp
