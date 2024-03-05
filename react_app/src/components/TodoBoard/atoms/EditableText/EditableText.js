import React, { useRef, useState } from 'react'

const EditableText = ({ text = "", editContent }) => {
    const [content, setContent] = useState(text)
    const [isEditing, setIsEditing] = useState(false);
    const textInputRef = useRef(null)

    const handleRightClick = async (e) => {
        await setIsEditing(true);
        const inputElement = textInputRef.current
        inputElement.select()
    }

    const handleBlur = () => setIsEditing(false)

    return (
        <>{isEditing ?
            (<input ref={textInputRef} defaultValue={content} onChange={(e) => setContent(e.target.value)} onBlur={handleBlur} />) :
            (<span onDoubleClick={handleRightClick}>{content}</span>)}</>
    )
}

export default EditableText