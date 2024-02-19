import React from 'react'
import ColumnWrapper, { ColumnTasks, ColumnTitle } from './Column.style'
import Task from '../Task/Task'

const Column = ({ children, title = "" }) => {
    return (
        <ColumnWrapper>
            <ColumnTitle>{title}</ColumnTitle>
            <ColumnTasks>
                <Task>Test</Task>
                {children}
            </ColumnTasks>
        </ColumnWrapper>
    )
}

export default Column