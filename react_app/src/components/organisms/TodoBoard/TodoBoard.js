import React, { useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { BoardWrapper, ColumnsWrapper } from './TodoBoard.style'
import Column from '../../molecules/Column/Column'
import { BoardContext } from 'context/TodoBoardContext'


const TodoBoard = () => {
    const { handleOnDragEnd, boardTasks } = useContext(BoardContext)

    return (
        <BoardWrapper onContextMenu={(e) => { e.preventDefault() }}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <ColumnsWrapper>
                    {Object.keys(boardTasks).map((key, index) => (<Column title={key} tasks={boardTasks[key]} index={index} />))}
                </ColumnsWrapper>
            </DragDropContext>
        </BoardWrapper>
    )
}

export default TodoBoard