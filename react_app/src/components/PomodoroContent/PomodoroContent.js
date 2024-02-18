import React from 'react'
import PomodoroContentWrapper from './PomodoroContent.style'

const PomodoroContent = ({ children }) => {
    return (
        <PomodoroContentWrapper>{children}</PomodoroContentWrapper>
    )
}

export default PomodoroContent