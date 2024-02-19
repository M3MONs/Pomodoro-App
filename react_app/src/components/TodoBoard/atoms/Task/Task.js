import React from 'react'
import { TaskWrapper } from './Task.style'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ children, id, index }) => {
    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided) => (
                <TaskWrapper key={id}
                    ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
                >
                    {children}
                </TaskWrapper>
            )}
        </Draggable>
    )
}

export default Task