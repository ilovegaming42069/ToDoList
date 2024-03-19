import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/TodoList';
import FilterButtons from './components/FilterButton';

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [filter, setFilter] = useState('all');

  const addList = (inputText) => {
    if (inputText !== '') {
      const newItem = { id: uuidv4(), text: inputText, status: 'not-started' };
      setListTodo(prev => [...prev, newItem]);
    }
  };

  const deleteListItem = (id) => {
    setListTodo(prev => prev.filter(item => item.id !== id));
  };

  const updateStatus = (id) => {
    const updatedList = listTodo.map(item => {
      if (item.id === id) {
        const nextStatus = item.status === 'not-started' ? 'in-progress'
                      : item.status === 'in-progress' ? 'done' : 'done';
        return { ...item, status: nextStatus };
      }
      return item;
    });
    setListTodo(updatedList);
  };

  const clearAllItemsBasedOnFilter = () => {
    if (filter === 'all') {
      setListTodo([]);
    } else {
      setListTodo(prev => prev.filter(item => item.status !== filter));
    }
  };

  const displayedItems = filter === 'all' ? listTodo : listTodo.filter(item => item.status === filter);

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <FilterButtons currentFilter={filter} setFilter={setFilter} />
        <h1 className="app-heading">Abdullah Akmal Sutoyo 2602239320</h1>
        {displayedItems.map((listItem) => (
          <Todolist
            key={listItem.id}
            item={listItem.text}
            status={listItem.status}
            deleteItem={() => deleteListItem(listItem.id)}
            updateStatus={() => updateStatus(listItem.id)}
          />
        ))}
        {listTodo.length > 0 && (
          <button className="clear-all-btn" onClick={clearAllItemsBasedOnFilter}>Clear All</button>
        )}
      </div>
    </div>
  );
}

export default App;

