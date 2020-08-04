import React from "react";
import "./App.css";
import styled from "styled-components";
import TodoItem from "./TodoItem";
// import Popup from "./Popup"

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
  var [task, setTask] = React.useState("");

  var [tasks, setTasks] = React.useState([
    {id: 1, title: 'test', completed: false},
    {id: 2, title: 'test22', completed: false},
    {id: 3, title: 'test333', completed: true},
  ]);

  // const [showPopup, setShowPopup] = React.useState(false)

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
      setTask("");
    }
  };

  const onDelete = (index) => {
    const tasksArray = [...tasks];
    tasksArray.splice(index, 1);
    setTasks(tasksArray);
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
  }

  // const onEdit = (onSaveTitle, index) => {
  //   setTasks(
  //     tasks.map(task =>{
  //       if(task.id === index) {
  //         task.title = onSaveTitle
  //       }
  //       return task
  //     })
  //   )
  // }

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
          // onSaveTitle={onEdit}
        />
      ))}
      {/* {showPopup ?  
      <Popup  
        text='Click "Close Button" to hide popup'
        closePopup={setShowPopup}/>  
      : null
      }  */}
    </MainContainer>
    
  );
}

export default App;