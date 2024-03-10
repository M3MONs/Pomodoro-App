import React from 'react'
import ColumnWrapper, { ColumnTitle } from './Column.style'
import ColumnTasks from '../ColumnTasks/ColumnTasks'
import { Item, Menu, useContextMenu } from 'react-contexify'
import 'react-contexify/ReactContexify.css';
import styled from 'styled-components';

const StyledItem = styled(Item)`
    font-weight: 700;
    font-size: .75rem;
    font-family: "Pacifico";
`

const Column = ({ title = "", tasks = [], index }) => {
    const { show } = useContextMenu({ id: title })

    const handleContextMenu = (e) => {
        show({ event: e })
    }

    const handleAddTask = () => { }

    return (
        <>
            <ColumnWrapper key={index} onContextMenu={handleContextMenu}>
                <ColumnTitle>{title}</ColumnTitle>
                <ColumnTasks tasks={tasks} title={title} />
            </ColumnWrapper>
            <Menu id={title} >
                <StyledItem onClick={handleAddTask} >
                    + ADD
                </StyledItem>
            </Menu>
        </>
    )
}

export default Column