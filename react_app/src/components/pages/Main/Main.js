import React from 'react'
import MainWrapper, { Background } from './Main.style'

const Main = ({ children }) => {
    return (
        <MainWrapper>
            <Background />
            {children}
        </MainWrapper>
    )
}

export default Main