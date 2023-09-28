import { useReducer } from "react";
import TodoContext from "./context/TodoContext";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import todoReducer from "./reducers/todoReducer";
import TodoDispatchContext from "./context/TodoDispatchContext";

function App() {
    const [list, dispatch] = useReducer(todoReducer, []);

    return (
        <TodoContext.Provider value={{ list }}>
            <TodoDispatchContext.Provider value={{ dispatch }}>
                <AddTodo />
                <TodoList />
            </TodoDispatchContext.Provider>
        </TodoContext.Provider>
    );
}

export default App;
