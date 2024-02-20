import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BoardWrapper, ColumnsWrapper } from './TodoBoard.style'
import Column from './atoms/Column/Column'

const TodoBoard = () => {
    // eslint-disable-next-line
    const [columns, setColumns] = useState([
        {
            id: 'task-1',
            content: 'Task 1',
        },
        {
            id: 'task-2',
            content: 'Task 2',
        },
        {
            id: 'task-3',
            content: 'Task 3',
        },
        {
            id: 'task-4',
            content: 'Task 4',
        },

    ]);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(columns);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setColumns(items);
    }

    return (
        <BoardWrapper>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <ColumnsWrapper>
                    <Column title={"In Progress"} tasks={columns} />
                </ColumnsWrapper>
            </DragDropContext>
        </BoardWrapper>
    )
}

export default TodoBoard