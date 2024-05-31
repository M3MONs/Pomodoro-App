import React, { useCallback, useEffect, useState } from 'react'
import PomodoroClockWrapper, { ClockTitle, ClockWrapper } from './PomodoroClock.style'
import PomodoroClockBtns from '../../molecules/PomodoroClockBtns'
import { formatTime } from '../../utils/PomodoroClock.utils'

const FOCUS_TIME = 30 * 60 * 1000
const BREAK_TIME = 5 * 60 * 1000



const PomodoroClock = () => {
    const [AUDIO, setAudio] = useState(null);
    const [remainingTime, setRemainingTime] = useState(FOCUS_TIME)
    const [isStarted, setIsStarted] = useState(false)
    const [clockState, setClockState] = useState('focus')

    useEffect(() => {
        import('../../../assets/alert.mp3')
            .then((alert) => {
                setAudio(new Audio(alert.default));
            });
    }, []);

    const handleSwitchRemainingTime = useCallback(() => {
        switch (clockState) {
            case 'focus':
                setRemainingTime(FOCUS_TIME)
                break
            case 'break':
                setRemainingTime(BREAK_TIME)
                break
            default:
                setRemainingTime(FOCUS_TIME)
        }
    }, [clockState])

    useEffect(() => {
        const handleClockState = async () => {
            AUDIO.play();
            await setClockState((prev) => (prev === 'focus' ? 'break' : 'focus'))
            handleSwitchRemainingTime()
        }

        if (remainingTime === 0) {
            handleClockState()
            return
        }

        if (isStarted) {
            const intervalTimer = setInterval(() => {
                setRemainingTime((prevTime) => prevTime - 1000)
            }, 1000)

            return () => clearInterval(intervalTimer)
        }
    }, [isStarted, remainingTime, handleSwitchRemainingTime, AUDIO])


    const handleTimerState = () => {
        AUDIO.play();
        setIsStarted(!isStarted)
    }

    const handleResetTimer = () => {
        setRemainingTime(FOCUS_TIME)
        setClockState('focus')
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