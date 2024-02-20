import React from 'react'
import { TaskWrapper } from './Task.style'

const Task = ({ children, provided }) => {
    return (
        <TaskWrapper ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {children}
        </TaskWrapper>
    )
}

export default Task