import React from 'react'
import PomodoroContentWrapper, { GridWrapper } from './PomodoroContent.style'

const PomodoroContent = ({ children }) => {
    return (
        <PomodoroContentWrapper>
            <GridWrapper>
                {children}
            </GridWrapper>
        </PomodoroContentWrapper>
    )
}

export default PomodoroContent