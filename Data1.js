import React,{useState} from 'react';

export default function DATA1(){
    const App = () => {
        const [employees, setEmployees] = useState();
        const [addFormData, setAddFormData] = useState({
            id: ' ',
            firstName: '',
            lastName: '',
            age: '',
            email: ''

        })
        const handleAddFormChange = (e) => {
            e.preventDefault();
            const fieldName = e.target.getAttribute ('name');
            const firldValue = e.target.value;

            const newFormData = {...addFormData};
            newFormData[fieldName] =  fieldValue;

            setAddFormData(newFormData);
        };
        const newEmployee = {
            id: addFormData.id,
            firstName: addFormData.firstName,
            lastName:addFormData.lastName,
            age: addFormData.age,
            email: addFormData.email
        };
        const newEmployees = [...employees, newEmployee];
        setEmployees(newEmployees);


        };
        <><h2>Add Employee</h2> <form onSubmit={handleAddFormChange}>
            <input type="number"
            name="id"
            required="required"
            placeholder="Enter employee id..."
            onChange={handleAddFormChange} />

            <input type="text"
            name="firstName"
            required="required"
            placeholder="Enter fn..."
            onChange={handleAddFormChange} />

            <input type="text"
            name="lastName"
            required="required"
            placeholder="Enter ln..."
            onChange={handleAddFormChange} />

            <input type="number"
            name="age"
            required="required"
            placeholder="Enter age..."
            onChange={handleAddFormChange} />

            <input type="email"
            name="email"
            required="required"
            placeholder="Enter email..."
            onChange={handleAddFormChange} />
            <button type="submit">Add</button>
        </form></>

    }
