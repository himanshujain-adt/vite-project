import { useEffect, useState } from 'react'
import { EmployeeData } from '../EmployeeData'

function CRUD_Operations() {
  const [data, setData] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)
  const [id, setId] = useState(0)
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    setData(EmployeeData);
  }, [])
  const handleEdit = (id) => {
    const dt = data.filter(item => item.id == id);

    if (dt !== undefined) {
      setIsUpdate(true)
      setId(id)
      setFirstName(dt[0].firstName)
      setLastName(dt[0].lastName)
      setAge(dt[0].age)
    }
  }
  const handleDelete = (id) => {

    if (id > 0) {
      if (window.confirm("Are you sure to delete data!!!!!")) {
        const dt = data.filter(item => item.id !== id)
        console.log(dt);
        setData(dt);
      }
    }
  }

  const handleSave = (e) => {
    e.preventDefault();
    const dt = [...data]
    const newObject = {
      id: EmployeeData.length + 1,
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    dt.push(newObject)
    setData(dt);

  }
  const handleUpdate = () => {
    const index = data.map((item, index) => {
      return item.id
    }).indexOf(id)
    const dt = [...data]
    dt[index].firstName = firstName;
    dt[index].lastName = lastName;
    dt[index].age = age;
    setData(dt)
    handleClear();
  }
  const handleClear = () => {
    setId(0)
    setFirstName('')
    setLastName('')
    setAge('')
  }

  return (
    <div style={{ paddingTop: "60px" }}  >
      <center>
        <u><h1>CRUD OPERATIONS</h1></u>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "10px", marginBottom: "10px" }}>
          <div>
            <label>First Name</label>
            <input type='text' placeholder='Enter First Name' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>
          <div>
            <label>Last  Name</label>
            <input type='text' placeholder='Enter Last Name' onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
          <div>
            <label>Age:
              <input type='text' placeholder='Enter Your age' onChange={(e) => setAge(e.target.value)} value={age} /></label>
          </div>
          <div>
            {
              !isUpdate ?
                <button className='btn btn-primary ' onClick={(e) => handleSave(e)}>Save</button>
                :
                <button className='btn btn-warning ' onClick={() => handleUpdate()}>Update</button>
            }



            <button className='btn btn-danger ' onClick={() => handleClear()}>Clear</button>
          </div>

        </div>
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
                    <button className='btn btn-primary ' onClick={() => handleEdit(item.id)}>Edit</button>&nbsp;
                    <button className='btn btn-danger ' onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>

                </tr>)
              })
            }
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default CRUD_Operations
