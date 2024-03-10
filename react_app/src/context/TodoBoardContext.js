import { initBoard } from "components/utils/TodoBoard.utils";

const { createContext, useState } = require("react");

export const BoardContext = createContext()

export const BoardProvider = ({ children }) => {
    const [boardTasks, setBoardTasks] = useState(initBoard)

    const isMoveToOtherColumn = (result) => { return result.destination.droppableId !== result.source.droppableId }

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        let updatedTasks = { ...boardTasks };

        if (isMoveToOtherColumn(result)) {
            const taskToMove = updatedTasks[result.source.droppableId][result.source.index];

            // Remove from source column directly
            updatedTasks[result.source.droppableId].splice(result.source.index, 1);

            // Insert into destination column
            const destinationTasks = updatedTasks[result.destination.droppableId];
            destinationTasks.splice(result.destination.index, 0, taskToMove);
        } else {
            const items = updatedTasks[result.source.droppableId];
            const [reorderedItem] = items.splice(result.source.index, 1);
            items.splice(result.destination.index, 0, reorderedItem);
        }

        setBoardTasks(updatedTasks);
    }


    const removeTask = (title, index) => {
        const updatedColumns = { ...boardTasks };
        const updatedTasks = [...updatedColumns[title]];

        updatedTasks.splice(index, 1);
        updatedColumns[title] = updatedTasks;
        setBoardTasks(updatedColumns);
    };

    const editTaskContent = (table, index, content) => {
        const updatedColumns = { ...boardTasks };
        const updatedTasks = [...updatedColumns[table]];

        updatedTasks[index].content = content
        updatedColumns[table] = updatedTasks

        setBoardTasks(updatedColumns)
    }

    const addTask = (table) => {
        const newTask = generateNewTask()

        const updatedColumns = { ...boardTasks };
        const updatedTasks = [...updatedColumns[table]];
        const newUpdatedTasks = [...updatedTasks, newTask]

        updatedColumns[table] = newUpdatedTasks

        setBoardTasks(updatedColumns)
    }

    const generateNewTask = () => {
        return {
            id: crypto.randomUUID(),
            content: "New Task",
        }
    }

    const contextValue = { handleOnDragEnd, removeTask, editTaskContent, addTask, boardTasks }
    return (
        <BoardContext.Provider value={contextValue}>{children}</BoardContext.Provider>
    );

}