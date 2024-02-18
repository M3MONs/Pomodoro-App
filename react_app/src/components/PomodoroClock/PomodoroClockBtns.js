import React from 'react'
import { Button } from 'antd'
import { ButtonsWrapper } from './PomodoroClock.style'

const PomodoroClockBtns = ({ isStarted, handleTimerState, handleResetTimer }) => {
    return (
        <ButtonsWrapper>
            {!isStarted ?
                <Button size='large' shape='round' onClick={handleTimerState} type='primary' style={{ backgroundColor: 'green' }}>Start</Button> :
                <Button size='large' shape='round' onClick={handleTimerState} type='primary'>Stop</Button>
            }
            <Button size='large' shape='round' type='primary' danger onClick={handleResetTimer}>Reset</Button>
        </ButtonsWrapper>
    )
}

export default PomodoroClockBtns