import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const todos = [
    {id: 1, title: "wash dishes", completed: false, },
    {id: 2, title: "wash car", completed: true, },
  ]
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
