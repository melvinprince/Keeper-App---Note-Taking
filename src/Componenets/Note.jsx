import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {
  function handleClick(id) {
    props.onDelete(id);
  }

  return (
    <div>
      {props.notes.map((item) => (
        <div className="note" key={item.key}>
          <h1>{item.title}</h1>
          <p>{item.content}</p>
          <button onClick={() => handleClick(item.key)}><DeleteIcon/></button>
        </div>
      ))}
    </div>
  );
}

export default Note;
