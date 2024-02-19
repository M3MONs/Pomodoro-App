import React from 'react'
import { TaskWrapper } from './Task.style'

const Task = ({ children }) => {
    return (
        <TaskWrapper draggable={true}>{children}</TaskWrapper>
    )
}

export default Task