import React from 'react';

import { Outlet, Link } from "react-router-dom";


function Home() {
  return (
    <>
    <div >
     <nav>
  <ul>
    <li>
      <h1><Link to="/">Home</Link></h1>
    </li>
    <li>
      <h1><Link to="/todolist">ToDoList</Link></h1>
    </li>
    <li>
      <h1><Link to="/crudoperations">CRUD Operations</Link></h1>
    </li>
    <li>
      <h1><Link to="/productapicall">ProductApiCall</Link></h1>
    </li>
  </ul>
</nav>
</div>

      <Outlet />
    </>
  );
}

export default Home;
