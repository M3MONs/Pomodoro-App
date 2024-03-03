import React from 'react'
import { ContentWrapper, TaskWrapper } from './SingleTask.style'
import { Draggable } from 'react-beautiful-dnd'
import { Button } from 'antd'

const SingleTask = ({ task = {}, index, title, rmTask }) => {

    const handleDeleteBtn = () => {
        rmTask(title, index)
    }

    const renderTaskDetails = (provided) => (
        <TaskWrapper ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <ContentWrapper>
                {task.content}
            </ContentWrapper>
            <Button size='small' shape='circle' style={{ fontWeight: 500 }} onClick={handleDeleteBtn}>X</Button>
        </TaskWrapper>
    )

    return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                renderTaskDetails(provided)
            )}
        </Draggable>
    )
}

export default SingleTask