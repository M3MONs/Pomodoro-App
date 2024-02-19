import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BoardWrapper, ColumnsWrapper } from './TodoBoard.style'
import Column from './atoms/Column/Column'

const columns = [
    { id: 1, title: 'To do', tasks: [] },
    { id: 2, title: 'In progress', tasks: [] },
    { id: 3, title: 'Done', tasks: [] },
]

const TodoBoard = () => {
    return (
        <BoardWrapper>
            <DragDropContext>
                <ColumnsWrapper>
                    {columns.map((column) => (
                        <Column key={column.id} title={column.title} />
                    ))}
                </ColumnsWrapper>
            </DragDropContext>
        </BoardWrapper>
    )
}

export default TodoBoard