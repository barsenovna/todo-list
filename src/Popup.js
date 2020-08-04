import React from 'react';
import styled from "styled-components";

const PopupContainer = styled.div`
  width: 40%;
  padding: 20px;
  left: 0;
  right: 0;
  margin: 15% auto;
  border: 1px solid black;
  position: absolute;
  background-color: white;
  text-align: center;
`;


const PopupBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  overflow: auto;
`;
// `
function Popup ({task, onSaveTitle, hidePopup}){ 
  const [itemTitle, setItemTitle] = React.useState(task.title);
  return (
    <React.Fragment>
      <PopupBackground></PopupBackground>
      <PopupContainer>
        <input value={itemTitle} onChange={e=>setItemTitle(e.target.value)} />
        <button onClick={()=> {onSaveTitle(itemTitle); hidePopup()}} >Save</button>
        <button onClick={hidePopup}>Cancel</button>
      </PopupContainer>
    </React.Fragment>
  )
}

export default Popup;