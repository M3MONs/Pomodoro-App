import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import SingleTask from '../SingleTask/SingleTask';
import Wrapper from './ColumnTasks.style';

const ColumnTasks = ({ tasks = [] }) => {
    return (
        <Droppable droppableId='tasks'>
            {(provided) => (
                <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, index) => {
                        return (
                            <SingleTask task={task} index={index} key={task.id} provided={provided} />
                        );
                    })}
                    {provided.placeholder}
                </Wrapper>
            )}
        </Droppable>
    )
}

export default ColumnTasks