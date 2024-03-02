import React from 'react'
import { ContentWrapper, TaskWrapper } from './SingleTask.style'
import { Draggable } from 'react-beautiful-dnd'
import { Button } from 'antd'

const SingleTask = ({ task = {}, index }) => {
    return (
        <Draggable key={task.id} draggableId={task.id} index={index}>
            {(provided) => (
                <TaskWrapper ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <ContentWrapper>
                        {task.content}
                    </ContentWrapper>
                    <Button size='small' shape='circle' style={{ fontWeight: 500 }}>X</Button>
                </TaskWrapper>
            )}
        </Draggable>
    )
}

export default SingleTask