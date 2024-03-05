const initBoard = {
    'to do': [
        {
            id: 'task-1',
            content: 'Task 1',
        },
        {
            id: 'task-2',
            content: 'Task 2',
        },
    ],
    'in progress': [
        {
            id: 'task-3',
            content: 'Task 3',
        },
        {
            id: 'task-4',
            content: 'Task 4',
        },
    ],
    'done': [
        {
            id: 'task-5',
            content: 'Task 5',
        },
        {
            id: 'task-6',
            content: 'Task 6',
        },
    ]
}

const isMoveToOtherColumn = (result) => { return result.destination.droppableId !== result.source.droppableId }

export { initBoard, isMoveToOtherColumn }