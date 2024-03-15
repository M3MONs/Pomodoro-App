import React, { useEffect, useState } from 'react'
import PomodoroClockWrapper, { ClockTitle, ClockWrapper } from './PomodoroClock.style'
import PomodoroClockBtns from '../../molecules/PomodoroClockBtns'
import { formatTime } from '../../utils/PomodoroClock.utils'
import alert from '../../../assets/alert.mp3'

const FOCUS_TIME = 30 * 60 * 1000
const BREAK_TIME = 5 * 60 * 1000
const AUDIO = new Audio(alert)


const PomodoroClock = () => {
    const [remainingTime, setRemainingTime] = useState(FOCUS_TIME)
    const [isStarted, setIsStarted] = useState(false)
    const [clockState, setClockState] = useState('focus')

    useEffect(() => {
        if (remainingTime === 0) {
            changeClockState()
            return
        }
        if (isStarted) {
            const intervalTimer = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1000)
            }, 1000)

            return () => clearInterval(intervalTimer)
        }
    }, [isStarted, remainingTime])

    useEffect(() => {
        switch (clockState) {
            case 'focus':
                // 30 minutes
                setRemainingTime(FOCUS_TIME)
                break
            case 'break':
                // 5 minutes
                setRemainingTime(BREAK_TIME)
                break
            default:
                break
        }
    }, [clockState])

    const handleTimerState = () => {
        AUDIO.play();
        setIsStarted(!isStarted)
    }

    const changeClockState = () => {
        AUDIO.play();
        setClockState((prev) => (prev === 'focus' ? 'break' : 'focus'))
    }

    const handleResetTimer = () => {
        setRemainingTime(FOCUS_TIME)
        setIsStarted(false)
    }

    return (
        <PomodoroClockWrapper>
            <ClockTitle>{clockState}...</ClockTitle>
            <ClockWrapper>{formatTime(remainingTime)}</ClockWrapper>
            <PomodoroClockBtns isStarted={isStarted} handleTimerState={handleTimerState} handleResetTimer={handleResetTimer} />
        </PomodoroClockWrapper>
    )
}

export default PomodoroClock