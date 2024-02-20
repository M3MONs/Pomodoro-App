import React from 'react'
import ColumnWrapper, { ColumnTasks, ColumnTitle } from './Column.style'
import Task from '../Task/Task'
import { Draggable, Droppable } from 'react-beautiful-dnd'

const Column = ({ title = "", tasks = [] }) => {
    return (
        <ColumnWrapper>
            <ColumnTitle>{title}</ColumnTitle>
            <Droppable droppableId='tasks'>
                {(provided) => (
                    <ColumnTasks {...provided.droppableProps} ref={provided.innerRef}>
                        {tasks.map((task, index) => {
                            return (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(provided) => (
                                        <Task provided={provided}>
                                            {task.content}
                                        </Task>
                                    )}
                                </Draggable>
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