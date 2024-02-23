import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BoardWrapper, ColumnsWrapper } from './TodoBoard.style'
import Column from './atoms/Column/Column'

const board =
    [
        {
            id: 0, name: 'To Do', tasks: [
                {
                    id: 'task-1',
                    content: 'Task 1',
                },
                {
                    id: 'task-2',
                    content: 'Task 2',
                },
            ]
        },
        {
            id: 1, name: 'In Progress', tasks: [
                {
                    id: 'task-3',
                    content: 'Task 3',
                },
                {
                    id: 'task-4',
                    content: 'Task 4',
                },
            ]
        },
        {
            id: 2, name: 'Done', tasks: [
                {
                    id: 'task-5',
                    content: 'Task 5',
                },
                {
                    id: 'task-6',
                    content: 'Task 6',
                },
            ]
        },
    ]

const TodoBoard = () => {
    // eslint-disable-next-line
    const [columns, setColumns] = useState(board);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(columns[2].tasks);
        const [reorderedItem] = items.splice(result.source.index, 2);
        items.splice(result.destination.index, 0, reorderedItem);

        const test = columns

        test[2].tasks = items

        setColumns(test);
    }

    return (
        <BoardWrapper>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <ColumnsWrapper>
                    {board.map((x, index) => (<Column title={x.name} tasks={x.tasks} index={index} />))}
                </ColumnsWrapper>
            </DragDropContext>
        </BoardWrapper>
    )
}

export default TodoBoard