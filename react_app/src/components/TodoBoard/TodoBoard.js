import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BoardWrapper, ColumnsWrapper } from './TodoBoard.style'
import Column from './atoms/Column/Column'

const TodoBoard = () => {
    // eslint-disable-next-line
    const [columns, setColumns] = useState([
        {
            id: 'column-1',
            title: 'Do zrobienia',
            tasks: [
                {
                    id: 'task-1',
                    content: 'Ukończyć zadanie 1',
                },
                {
                    id: 'task-2',
                    content: 'Rozpocząć zadanie 2',
                },
                {
                    id: 'task-3',
                    content: 'Ukończyć zadanie 1',
                },
                {
                    id: 'task-4',
                    content: 'Rozpocząć zadanie 2',
                },
            ],
        },
        {
            id: 'column-2',
            title: 'W toku',
            tasks: [],
        },
        {
            id: 'column-3',
            title: 'Gotowe',
            tasks: [],
        },
    ]);
    return (
        <BoardWrapper>
            <DragDropContext>
                <ColumnsWrapper>
                    {columns.map((column) => (
                        <Column key={column.id} title={column.title} tasks={column.tasks} />
                    ))}
                </ColumnsWrapper>
            </DragDropContext>
        </BoardWrapper>
    )
}

export default TodoBoard