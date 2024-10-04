
import { useState } from 'react';
import React from 'react';
import { Button, Modal } from 'react-bootstrap';


function ToDoList() {

  let [todolist, setToDoList] = useState([]);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  let saveToDoList = (event) => {
    let toname = event.target.toname.value.toUpperCase();

    if (!todolist.includes(toname)) {
      let finaDoList = [...todolist, toname]
      setToDoList(finaDoList);

    }
    else {
      alert("Already exist!!!!!")
    }
    event.preventDefault();

  }
  let list = todolist.map((value, index) => {
    return (
      <ToDoListItems value={value} key={index} indexNumber={index}
        todolist={todolist}
        setToDoList={setToDoList}
      />
    )
  })
  return (
    <div >
      <center>
        <h1>To-do List</h1>

        <form onSubmit={saveToDoList}>
         

          <input type='text' name='toname' /><button className='btn btn-primary'>Save</button>
        </form>
        <div className='outerDiv'>
          <ul>
            {list}
          </ul>
        </div>
      </center>
    </div>
  );
}

export default ToDoList;
function ToDoListItems({ value, indexNumber, setToDoList, todolist }) {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteRow = () => {
  
    const updatedList = todolist.filter((_, i) => i !== indexNumber);
    setToDoList(updatedList);
    handleClose(); 
  };

  const checkStatus = () => {
    setStatus(!status);
  };

  return (
    <>
  
      <li className={status ? 'completetodo' : ''} onClick={checkStatus}>
        {indexNumber + 1}.{value}
        <span onClick={handleShow} style={{ cursor: 'pointer', marginLeft: '10px' }}>
          &times;
        </span>
      </li>

    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure you want to delete?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={deleteRow}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

