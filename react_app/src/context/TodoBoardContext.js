import { initBoard } from "components/utils/TodoBoard.utils";
import Cookies from "js-cookie";

const { createContext, useState } = require("react");

export const BoardContext = createContext()

export const BoardProvider = ({ children }) => {
    const [boardTasks, setBoardTasks] = useState(Cookies.get('board') ? JSON.parse(Cookies.get('board')) : initBoard)

    const isMoveToOtherColumn = (result) => { return result.destination.droppableId !== result.source.droppableId }

    const updateTasks = (updatedTasks) => {
        setBoardTasks(updatedTasks)
        Cookies.set('board', JSON.stringify(updatedTasks), { expires: 7 });
    }

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

        updateTasks(updatedTasks)
    }

    const removeTask = (title, index) => {
        const updatedColumns = { ...boardTasks };
        const updatedTasks = [...updatedColumns[title]];

        updatedTasks.splice(index, 1);
        updatedColumns[title] = updatedTasks;
        updateTasks(updatedColumns)
    };

    const editTaskContent = (table, index, content) => {
        const updatedColumns = { ...boardTasks };
        const updatedTasks = [...updatedColumns[table]];

        updatedTasks[index].content = content
        updatedColumns[table] = updatedTasks

        updateTasks(updatedColumns)
    }

    const addTask = (table) => {
        const newTask = generateNewTask()

        const updatedColumns = { ...boardTasks };
        const updatedTasks = [...updatedColumns[table]];
        const newUpdatedTasks = [...updatedTasks, newTask]

        updatedColumns[table] = newUpdatedTasks

        updateTasks(updatedColumns)
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