import React from 'react'
import { TaskWrapper } from './SingleTask.style'
import { Draggable } from 'react-beautiful-dnd'

const SingleTask = ({ task = {}, index }) => {
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

export default SingleTask