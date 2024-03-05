import React, { useRef, useState } from 'react'

const EditableText = ({ text = "", editContent }) => {
    const [content, setContent] = useState(text)
    const [isEditing, setIsEditing] = useState(false);
    const textInputRef = useRef(null)

    const handleDoubleClick = async () => {
        await setIsEditing(true);
        const inputElement = textInputRef.current
        inputElement.select()
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            editContentEnd()
        }
    }

    const editContentEnd = () => {
        setIsEditing(false)
        editContent(content)
    }

    return (
        <>{isEditing ?
            (<input
                ref={textInputRef}
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
                onBlur={editContentEnd}
                onKeyDown={handleKeyDown}
            />) :
            (<span
                onDoubleClick={handleDoubleClick}>
                {content}
            </span>)}</>
    )
}

export default EditableText