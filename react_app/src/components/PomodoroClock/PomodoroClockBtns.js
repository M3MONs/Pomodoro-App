import React from 'react'
import { Button } from 'antd'
import { ButtonsWrapper } from './PomodoroClock.style'

const PomodoroClockBtns = ({ isStarted }) => {
    return (
        <ButtonsWrapper>
            {!isStarted ? <Button>Start</Button> : <Button>Stop</Button>}
            <Button>Reset</Button>
        </ButtonsWrapper>
    )
}

export default PomodoroClockBtns