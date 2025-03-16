// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const [data,setData] = useState([])

  const [input,setInput] =  useState("")

  const [editInput,SetEditInput] = useState("")

  const [editIndex,SetEditIndex] = useState(null);

  function handleAdd(e){
      e.preventDefault();
      if(input.work.trim() !== ''){
        setData((pre) => [...pre,input]);
        setInput("")
      }
      else {
        alert('Please enter the valid todo')
      }
}

function handleDelete(work){
    setData(data.filter(items => work !== items.work))
}

function handleUpdate(index){
  SetEditIndex(index);
  SetEditInput(data[index].work)
}

function handleSave() {
  const updatedData = [...data];
  updatedData[editIndex].work = editInput; 
  setData(updatedData);
  SetEditIndex(null); 
  console.log(updatedData)
}



  return (
    <div className="App">
      <div className='wrapper'>
          <h1 style={{color:'white'}}>Todo List</h1>
          <input type="text" className='input' value={input.work || ''} onChange={(e) => setInput((pre) => {
            return {...pre,work:e.target.value}
          })}/>
          <button onClick={handleAdd} className='btn'>Add</button>
      </div>
      <div>
        {data.map((item,index) => (
          <div style={{textAlign:'center'}} key={index}>
            <p style={{color:'white'}}>{item.work}</p>
            {editIndex === index ? (<>
              <input type="text" style={{marginTop:'20px',padding:'10px'}} value={editInput} onChange={(e) => SetEditInput(e.target.value)}/>
              <button onClick={handleSave} className='btn'>Save</button>
            </>):
            (<>
             <button onClick={() => handleDelete(item.work)}>Delete</button>
             <button onClick={() => handleUpdate(index)}>Update</button>
            </>)}
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


