import React from 'react'
import ColumnWrapper, { ColumnTitle } from './Column.style'
import ColumnTasks from '../ColumnTasks/ColumnTasks'

const Column = ({ title = "", tasks = [] }) => {
    return (
        <ColumnWrapper>
            <ColumnTitle>{title}</ColumnTitle>
            <ColumnTasks tasks={tasks} />
        </ColumnWrapper>
    )
}

export default Column