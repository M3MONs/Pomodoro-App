const initBoard = {
    'to do': [
    ],
    'in progress': [
    ],
    'done': [
    ]
}

const isMoveToOtherColumn = (result) => { return result.destination.droppableId !== result.source.droppableId }

export { initBoard, isMoveToOtherColumn }