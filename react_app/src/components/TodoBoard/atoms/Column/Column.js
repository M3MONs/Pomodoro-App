import React from 'react'
import ColumnWrapper, { ColumnTasks, ColumnTitle } from './Column.style'
import Task from '../Task/Task'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ title = "", tasks = [] }) => {
    return (
        <ColumnWrapper>
            <ColumnTitle>{title}</ColumnTitle>
            <ColumnTasks>
                {tasks.map((task, index) => (
                    <Droppable droppableId={title} >
                        {(provided) => (
                            <Task
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                id={task.id}
                                index={index}
                            >
                                {task.content}
                            </Task>
                        )}
                    </Droppable>))}
            </ColumnTasks>
        </ColumnWrapper>
    )
}

export default Column