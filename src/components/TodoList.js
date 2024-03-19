import React from 'react';

function Todolist({ index, item, status, deleteItem, updateStatus }) {
  const formatStatus = (status) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <li className={`list-item ${status}`}>
      <div className="todo-content">
        <p className="todo-item">{item}</p>
        <p className="todo-status">Status: {formatStatus(status)}</p>
      </div>
      <div className="icons">
        {status !== 'done' && (
          <button className="status-btn" onClick={() => updateStatus(index)}>
            <i className="fa-solid fa-square-check"></i>
          </button>
        )}
        <button className="icon-delete" onClick={() => deleteItem(index)}>
          <i className="fa-solid fa-square-minus icon-delete"></i>
        </button>
      </div>
    </li>
  );
}


export default Todolist;
