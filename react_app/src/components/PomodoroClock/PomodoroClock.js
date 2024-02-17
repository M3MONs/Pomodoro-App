import React, { useEffect, useState } from 'react'
import PomodoroClockWrapper, { ClockWrapper } from './PomodoroClock.style'
import PomodoroClockBtns from './PomodoroClockBtns'

const PomodoroClock = () => {
    const [initTime, setInitTime] = useState(30 * 60 * 1000)
    const [isStarted, setIsStarted] = useState(false)

    useEffect(() => {
        if (isStarted) { }
    }, 1000)

    const formatTime = (time) => {
        const min = Math.floor(time / (1000 * 60))
        const sec = Math.floor((time % (1000 * 60)) / 1000)
        return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
    }

    return (
        <PomodoroClockWrapper>
            <ClockWrapper>{formatTime(initTime)}</ClockWrapper>
            <PomodoroClockBtns isStarted={isStarted} />
        </PomodoroClockWrapper>
    )
}

export default PomodoroClock