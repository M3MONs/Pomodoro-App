import React from 'react'
import { TaskWrapper } from './Task.style'
import { Draggable } from 'react-beautiful-dnd'

const Task = ({ task = {}, index, provided }) => {
    return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                <TaskWrapper ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {task.content}
                </TaskWrapper>
            )}
        </Draggable>
    )
}

export default Task