import React, { useEffect, useCallback } from "react";
import "./App.css";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import Popup from "./Popup"

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 500px;
  margin-top: 50px;
  text-align: center;
`;

const InputRow = styled.div`
  margin-top: 50px;
  flex-direction: row;
`;

const TextInput = styled.input``;

const AddButton = styled.button`
  margin-left: 50px;
`;

function App() {
  const [task, setTask] = React.useState("");
  const [currentTaskId, setCurrentTaskId] = React.useState();
  const [tasks, setTasks] = React.useState([])


  const getTasks = useCallback(() => {
    if(localStorage.hasOwnProperty('savedTasks')){
      return JSON.parse(localStorage.getItem('savedTasks'))
    } else {
      return [
        {id: 1, title: 'test', completed: false},
        {id: 2, title: 'test22', completed: false},
        {id: 3, title: 'test333', completed: true}, 
      ]
    }
  }, []);


  useEffect(()=> {
    const tasks = getTasks()
    setTasks(tasks);
  },[getTasks]);


  // just to print variable tasks
  useEffect(() => {
    console.log(tasks); //check the result here
  }, [tasks])
    

  const addTask = () => {
    if (task.length) {
      setTasks(
        tasks.concat([
          {
            id: Date.now(),
            title: task,
            completed: false
          }])
      )
      localStorage.setItem('savedTasks', JSON.stringify(tasks));
      setTask("");
    }
    
  };

  const onDelete = (index) => {
    const tasksArray = [...tasks];
    tasksArray.splice(index, 1);
    setTasks(tasksArray);
    localStorage.setItem('savedTasks', JSON.stringify(tasksArray));
  };

  const taskToggled = (index) =>{
    setTasks(
      tasks.map(task => {
        if (task.id === index) {
          task.completed = !task.completed
        }
        return task
      })
    )
    localStorage.setItem('savedTasks', JSON.stringify(tasks));
  }

  const onEdit = (newTitle) => {
    setTasks(
      tasks.map(task =>{
        if(task.id === currentTaskId) {
          task.title = newTitle
        }
        return task
      })
    )
    localStorage.setItem('savedTasks', JSON.stringify(tasks));
  }

  function hidePopup() {
    setCurrentTaskId(
      null
    )
  }

  return (
    <MainContainer>
      <Header>Todo List</Header>
      <InputRow>
        <TextInput value={task} onChange={e=>setTask(e.target.value)} />
        <AddButton onClick={addTask}>Add new task</AddButton>
      </InputRow>
      {tasks.map((task) => (
        <TodoItem 
          task={task} 
          key ={task.id}
          onDelete={onDelete} 
          onChecked = {taskToggled}
          setCurrentTaskId = {setCurrentTaskId}
          // onSaveTitle={onEdit}
        />
      ))}
      {currentTaskId && <Popup
        task={tasks.find(task => task.id === currentTaskId)}
        onSaveTitle={onEdit}
        hidePopup={hidePopup}></Popup>}
      
    </MainContainer>
    
  );
}

export default App;