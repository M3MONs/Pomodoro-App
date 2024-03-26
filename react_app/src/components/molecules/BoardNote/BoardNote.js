import { Alert } from 'antd'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin:  0 auto;
    width: 100%;
    height: 1.5rem;
    justify-content: center;
    grid-area: 3 / 1 / 3 / 3;
    font-weight: bold;
`

const BoardNote = () => {
    return (
        <Wrapper>
            <Alert message="Right click to add task! Double click to edit task!" type="info" showIcon closable />
        </Wrapper>
    )
}

export default BoardNote