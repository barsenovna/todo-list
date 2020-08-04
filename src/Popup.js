import React from 'react';


function Popup (onSaveTitle, setShowPopup){ 
  const [itemTitle, setItemTitle] = React.useState("");

  return (
    <popup>
      <input value={itemTitle} onChange={e=>setItemTitle(e.target.value)} />
      <button onClick={()=> onSaveTitle(itemTitle)}>Save</button>
    </popup>
        
  )
}

export default Popup;