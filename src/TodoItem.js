import React from "react";
import styled from "styled-components";


const MainContainer = styled.div`
  width: 500px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

const Title = styled.div``;

const DeleteButton = styled.button``;

function TodoItem({ task, onDelete, onChecked}) {
  // const [isEditing, setIsEditing] = React.useState(false);
  
  const classes = []
  if (task.completed) {
    classes.push('done')
  }

  

  return (
    <MainContainer>
      <input type="checkbox" checked={task.completed} onChange={() => onChecked(task.id)}/>
      <span className={classes.join(' ')}>  
        <Title>{task.title}</Title>
      </span>
      <DeleteButton onClick={() => onDelete(task.index)}> Delete Item </DeleteButton>
      {/* <button onClick={setIsEditing(isEditing => !isEditing)}> Edit Item </button> */}
    </MainContainer>
  );

  
}

export default TodoItem;