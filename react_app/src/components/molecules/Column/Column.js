import React, { useContext } from 'react'
import ColumnWrapper, { ColumnTitle } from './Column.style'
import ColumnTasks from '../ColumnTasks/ColumnTasks'
import { Item, Menu, useContextMenu } from 'react-contexify'
import 'react-contexify/ReactContexify.css';
import styled from 'styled-components';
import { BoardContext } from 'context/TodoBoardContext';

const StyledItem = styled(Item)`
    font-weight: 700;
    font-size: .75rem;
    font-family: "Pacifico";
`

const Column = ({ title = "", tasks = [], index }) => {
    const { show } = useContextMenu({ id: title })
    const { addTask } = useContext(BoardContext)

    const handleContextMenu = (e) => {
        show({ event: e })
    }

    const handleAddTask = (title) => { addTask(title) }

    return (
        <>
            <ColumnWrapper key={index} onContextMenu={handleContextMenu}>
                <ColumnTitle>{title}</ColumnTitle>
                <ColumnTasks tasks={tasks} title={title} />
            </ColumnWrapper>
            <Menu id={title} >
                <StyledItem onClick={(e) => { handleAddTask(title) }} >
                    + ADD
                </StyledItem>
            </Menu>
        </>
    )
}

export default Column