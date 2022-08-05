import './App.css';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Todoinput/>
      <TodoList />
    </div>
  );
}

export default App;
