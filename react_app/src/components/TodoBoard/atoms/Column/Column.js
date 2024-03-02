import React from 'react'
import ColumnWrapper, { ColumnTitle } from './Column.style'
import ColumnTasks from '../ColumnTasks/ColumnTasks'

const Column = ({ title = "", tasks = [], index, rmTask }) => {
    return (
        <ColumnWrapper key={index}>
            <ColumnTitle>{title}</ColumnTitle>
            <ColumnTasks tasks={tasks} title={title} rmTask={rmTask} />
        </ColumnWrapper>
    )
}

export default Column