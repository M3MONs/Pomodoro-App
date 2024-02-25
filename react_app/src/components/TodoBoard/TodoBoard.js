import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BoardWrapper, ColumnsWrapper } from './TodoBoard.style'
import Column from './atoms/Column/Column'
import { initBoard, isMoveToOtherColumn } from './TodoBoard.utils'


const TodoBoard = () => {
    // eslint-disable-next-line
    const [columns, setColumns] = useState(initBoard);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        let updatedColumns = { ...columns };

        if (isMoveToOtherColumn(result)) {
            const taskToMove = updatedColumns[result.source.droppableId][result.source.index];

            // Remove from source column directly
            updatedColumns[result.source.droppableId].splice(result.source.index, 1);

            // Insert into destination column
            const destinationTasks = updatedColumns[result.destination.droppableId];
            destinationTasks.splice(result.destination.index, 0, taskToMove);
        } else {
            const items = updatedColumns[result.source.droppableId];
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
        }

        setColumns(updatedColumns);
    }

    return (
        <BoardWrapper>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <ColumnsWrapper>
                    {Object.keys(columns).map((key, index) => (<Column title={key} tasks={columns[key]} index={index} />))}
                </ColumnsWrapper>
            </DragDropContext>
        </BoardWrapper>
    )
}

export default TodoBoard