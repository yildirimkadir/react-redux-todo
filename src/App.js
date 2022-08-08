import './App.css';
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { getStore } from './redux/index';
import todoReducer from './redux/reducer/todoReducer';

function App() {
 const store = createStore(todoReducer);
  return (
    <div className="App">
      <Provider store={store}>
      <Todoinput/>
      <TodoList />
      </Provider>

    </div>
  );
}

export default App;
