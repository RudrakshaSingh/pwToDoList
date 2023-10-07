import { bindActionCreators } from "redux";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { useDispatch } from "react-redux";
import todoReducer, { addTodo, editTodo, deleteTodo, todoFinished } from "./slices/todoSlice";

function App() {
    const dispatch = useDispatch(); //refers to store prop you created in app.jsx
    const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, todoFinished }, dispatch);

    return (
        <>
            <AddTodo addTodo={actions.addTodo} />
            <TodoList
                deleteTodo={actions.deleteTodo}
                editTodo={actions.editTodo}
                todoFinished={actions.todoFinished}
            />
        </>
    );
}

export default App;
