import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';
import Filters from './components/Filters';
import {useState} from 'react'
function App() {
  const [todo, setTodo] = useState([])
  const getData = (receivedData) => {
    setTodo([...todo , receivedData])
  }
  
   todo.length === 0 ?  console.log("no data") : console.log(todo)
  
  return (
    <div className="todoapp">
      <Form getData={getData}/>
      <Todolist todo={todo} setTodo={setTodo}/>
      <Filters/>
    </div>
  );
}

export default App;
