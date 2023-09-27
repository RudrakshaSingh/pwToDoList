import { useState } from "react";

function Todo({ todoData, isFinished, changeFinished, onDelete, onEdit }) {
    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);
    return (
        <div>
            <input
                type="checkbox"
                checked={finished}
                onChange={(e) => {
                    setFinished(e.target.checked);
                    changeFinished(e.target.checked);
                }}
            />

            {/* value  sets the value of the <input> field to the value of the editText state variable*/}
            {isEditing ? (
                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
            ) : (
                <span>{todoData}</span>
            )}

            <button
                onClick={() => {
                    setIsEditing(!isEditing);
                    onEdit(editText);
                }}
            >
                {!isEditing ? "Edit" : "save"}
            </button>

            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Todo;
