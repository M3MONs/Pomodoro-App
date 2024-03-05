import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import SingleTask from '../SingleTask/SingleTask';
import Wrapper from './ColumnTasks.style';


const ColumnTasks = ({ tasks = [], title = "" }) => {

    const renderTasks = (provided) => (tasks.map((task, index) => {
        return (
            <SingleTask task={task} index={index} key={task.id} provided={provided} title={title} />
        );
    }))

    return (
        <Droppable droppableId={title}>
            {(provided) => (
                <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
                    {renderTasks(provided)}
                    {provided.placeholder}
                </Wrapper>
            )}
        </Droppable>
    )
}

export default ColumnTasks