import React from 'react'
import ColumnWrapper, { ColumnTasks, ColumnTitle } from './Column.style'
import Task from '../Task/Task'
import { Droppable } from 'react-beautiful-dnd'

const Column = ({ title = "", tasks = [] }) => {
    return (
        <ColumnWrapper>
            <ColumnTitle>{title}</ColumnTitle>
            <Droppable droppableId='tasks'>
                {(provided) => (
                    <ColumnTasks {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => {
                            return (
                                <Task task={task} index={index} key={task.id} provided={provided} />
                            );
                        })}
                        {provided.placeholder}
                    </ColumnTasks>
                )}
            </Droppable>
        </ColumnWrapper>
    )
}

export default Column