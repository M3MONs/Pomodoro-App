import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BoardWrapper, Column, ColumnsWrapper } from './TodoBoard.style'

const columns = [
    { id: 1, title: 'To do' },
    { id: 2, title: 'In progress' },
    { id: 3, title: 'Done' },
]

const TodoBoard = () => {
    return (
        <BoardWrapper>
            <DragDropContext>
                <ColumnsWrapper>
                    {columns.map((column) => (
                        <Column key={column.id} className='column'>
                            <h3>{column.title}</h3>
                            <ul>
                                <li key={column.id} draggable="true">
                                    test
                                </li>
                            </ul>
                        </Column>
                    ))}
                </ColumnsWrapper>
            </DragDropContext>
        </BoardWrapper>
    )
}

export default TodoBoard