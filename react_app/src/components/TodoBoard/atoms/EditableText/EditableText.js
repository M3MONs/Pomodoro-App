import React, { useRef, useState } from 'react'

const EditableText = ({ text = "", editContent }) => {
    const [content, setContent] = useState(text)
    const [isEditing, setIsEditing] = useState(false);
    const textInputRef = useRef(null)

    const handleRightClick = (e) => { e.preventDefault(); setIsEditing(true) }

    const handleKeyDown = (e) => {
        setContent(e.target.value)
        if (e.key === "Enter") {
            setIsEditing(false)
            editContent(textInputRef.current.value)
        }
    }

    const handleBlur = () => setIsEditing(false)

    return (
        <>{isEditing ?
            (<input ref={textInputRef} defaultValue={content} onChange={(e) => setContent(e.target.value)} onBlur={handleBlur} />) :
            (<span onDoubleClick={handleRightClick}>{content}</span>)}</>
    )
}

export default EditableText