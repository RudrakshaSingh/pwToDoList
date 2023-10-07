import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function TodoList({ editTodo, deleteTodo, todoFinished }) {
    const list = useSelector((State) => State.todo.todoList);

    function onFinished(todo, isFinished) {
        todoFinished({ todo, isFinished });
    }

    function onDelete(todo) {
        deleteTodo({ todo });
    }

    function onEdit(todo, todoText) {
        editTodo({ todo, todoText });
    }

    return (
        <div>
            {list.length > 0 &&
                list.map((todo) => (
                    <Todo
                        key={todo.id}
                        todoData={todo.todoData}
                        isFinished={todo.finished}
                        id={todo.id}
                        changeFinished={(isFinished) => onFinished(todo, isFinished)}
                        onDelete={() => onDelete(todo)}
                        onEdit={(todoText) => onEdit(todo, todoText)}
                    />
                ))}
        </div>
    );
}
export default TodoList;
