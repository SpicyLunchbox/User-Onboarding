import React, {useState, useEffect} from 'react';
import Form from './Form'
import UserCards from './UserCards'
import axios from 'axios'
import * as yup from 'yup'
import './App.css';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  ToS: false,
}


function App() {

  const [users, setUsers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const postNewUser = (newUser) => { //if there is an error, check () around newUser.  May need to be removed.
    axios.post('https://reqres.in/api/users', newUser)
      .then (res => {
        console.log(res)
        setUsers([...users, newUser])
      })
      .catch (err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }


  const submitForm = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }
    if (!newUser.name || !newUser.email || !newUser.password) {
      return;
    }
    postNewUser(newUser)
  }

  return (
    <div className="App">
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {users.map(user => {
        return (
          <UserCards key={user.id} user={user} />
        )
      })}
    </div>
  );
}

export default App;
