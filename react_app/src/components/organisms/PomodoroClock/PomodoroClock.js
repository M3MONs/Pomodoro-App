import React, { useEffect, useState } from 'react'
import PomodoroClockWrapper, { ClockWrapper } from './PomodoroClock.style'
import PomodoroClockBtns from '../../molecules/PomodoroClockBtns'
import { formatTime } from '../../utils/PomodoroClock.utils'

const PomodoroClock = () => {
    const [remainingTime, setRemainingTime] = useState(30 * 60 * 1000)
    const [isStarted, setIsStarted] = useState(false)

    useEffect(() => {
        if (isStarted) {
            const intervalTimer = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1000)
            }, 1000)

            return () => clearInterval(intervalTimer)
        }
    }, [isStarted, remainingTime])

    const handleTimerState = () => {
        setIsStarted(!isStarted)
    }

    const handleResetTimer = () => {
        setRemainingTime(30 * 60 * 1000)
        setIsStarted(false)
    }

    return (
        <PomodoroClockWrapper>
            <ClockWrapper>{formatTime(remainingTime)}</ClockWrapper>
            <PomodoroClockBtns isStarted={isStarted} handleTimerState={handleTimerState} handleResetTimer={handleResetTimer} />
        </PomodoroClockWrapper>
    )
}

export default PomodoroClock