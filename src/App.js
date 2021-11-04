import './App.css';
import React from 'react';
import TodoTable from './components/TodoTable/TodoTable';
import Header from './components/Home/Header';

function App() {
  return (
    <div className="App">
      <Header />

      <TodoTable />
    </div>
  );
}

export default App;
