
import './App.css';
import { useState } from 'react';


function Square() {
  function handleClick() {
    setValue('X');
  }
  const [value, setValue] = useState(null);

  return <button className="square" onClick={handleClick}>{value}</button>;
}


export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}