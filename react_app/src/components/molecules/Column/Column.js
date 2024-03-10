import React from 'react'
import ColumnWrapper, { ColumnTitle } from './Column.style'
import ColumnTasks from '../ColumnTasks/ColumnTasks'
import { Item, Menu, useContextMenu } from 'react-contexify'
import 'react-contexify/ReactContexify.css';
import styled from 'styled-components';

const MENU_ID = "ADD_TASK"

const StyledItem = styled(Item)`
    font-weight: 700;
    font-size: .75rem;
    font-family: "Pacifico";
`

const Column = ({ title = "", tasks = [], index }) => {
    const { show } = useContextMenu({ id: MENU_ID })

    const handleContextMenu = (e) => {
        show({ event: e, props: {} })
    }

    return (
        <>
            <ColumnWrapper key={index} onContextMenu={handleContextMenu}>
                <ColumnTitle>{title}</ColumnTitle>
                <ColumnTasks tasks={tasks} title={title} />
            </ColumnWrapper>
            <Menu id={MENU_ID} maxWidth="5px" animation='scale'>
                <StyledItem id='add' >
                    ADD
                </StyledItem>
            </Menu>
        </>
    )
}

export default Column