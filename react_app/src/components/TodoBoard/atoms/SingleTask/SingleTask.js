import React, { useContext } from 'react'
import { ContentWrapper, TaskWrapper } from './SingleTask.style'
import { Draggable } from 'react-beautiful-dnd'
import { Button } from 'antd'
import { BoardContext } from 'context/TodoBoardContext'
import EditableText from '../EditableText/EditableText'

const SingleTask = ({ task = {}, index, title }) => {

    const { removeTask, editTaskContent } = useContext(BoardContext)

    const handleDeleteBtn = () => {
        removeTask(title, index)
    }

    const handleEditTaskContent = (text) => {
        editTaskContent(title, index, text)
    }

    const renderTaskDetails = (provided) => (
        <TaskWrapper ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <ContentWrapper>
                <EditableText text={task.content} editContent={handleEditTaskContent} />
            </ContentWrapper>
            <Button size='small' shape='circle' style={{ fontWeight: 500 }} onClick={handleDeleteBtn}>X</Button>
        </TaskWrapper>
    )

    return (
        <Draggable key={task.id} draggableId={task.id} index={index} onContextMenu={(e) => { e.preventDefault() }}>
            {(provided) => (
                renderTaskDetails(provided)
            )}
        </Draggable>
    )
}

export default SingleTask