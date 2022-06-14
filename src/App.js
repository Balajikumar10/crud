
import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import { toHaveAccessibleName } from '@testing-library/jest-dom/dist/matchers';
function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  const [EmployeeList, setEmployeeList] = useState([]);


  console.log(EmployeeList)
  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage);
  // }
  const addEmployee = () => {
    // console.log("dd", name);
    Axios.post('http://localhost:4001/employees', {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage
    }).then(() => {
      console.log("success");
    });
  }

  const getEmployees = () => {
    Axios.get('http://localhost:4001/callemployes').then((response) => {
      setEmployeeList(response.data);
    });
  }

  return (
    <div className="App">
      <div className='information'>
        <label>Name:</label>
        <input type="text" onChange={(e) => { setName(e.target.value) }}></input><br />
        <label>age:</label>
        <input type="number" onChange={(e) => { setAge(e.target.value) }}></input><br />
        <label>country:</label>
        <input type="text" onChange={(e) => { setCountry(e.target.value) }}></input><br />
        <label>position:</label>
        <input type="text" onChange={(e) => { setPosition(e.target.value) }}></input><br />
        <label>wage(year)</label>
        <input type="number" onChange={(e) => { setWage(e.target.value) }}></input><br />
        <button onClick={() => addEmployee()}>Add Employee</button>
      </div>
      -----------------------------------
      <div>
        <button onClick={getEmployees}>show employees</button>


        {EmployeeList.map((val, key) => {
          return <div className='employee'>
            <h3>{val.name}</h3>
          </div>
        })}
      </div>
    </div>
  );
}
export default App;
