import React from 'react'
import { Button } from 'antd'
import { ButtonsWrapper } from './PomodoroClock.style'

const PomodoroClockBtns = ({ isStarted, handleTimerState, handleResetTimer }) => {
    return (
        <ButtonsWrapper>
            {!isStarted ?
                <Button onClick={handleTimerState}>Start</Button> :
                <Button onClick={handleTimerState}>Stop</Button>
            }
            <Button onClick={handleResetTimer}>Reset</Button>
        </ButtonsWrapper>
    )
}

export default PomodoroClockBtns