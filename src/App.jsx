import { useEffect, useState } from 'react'
import './App.css'
import { EmployeeData } from './EmployeeData'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(EmployeeData);
  })
  const handleEdit=(id)=>{
    
  }

  return (
    <div >
      <table className='table table-hover ' >
        <thead>
          <tr>
            <td>S.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (<tr key={index}>
                <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                  <button className='btn btn-primary '>Edit</button>&nbsp;
                  <button className='btn btn-danger '>Delete</button>
                </td>

              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default App
