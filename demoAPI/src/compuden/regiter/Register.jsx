import React, { useState } from 'react'
import {Navigate, useNavigate} from "react-router-dom" 
export default function Register() {
  const navigate=useNavigate()
  const [names, setNames] = useState({
    name: "",
    email: "",
    password:""
  });

  const handlechale = (e) => {
    let { name, value } = e.target
    setNames({ ...names,[name]:value });
  }
  const handClick = () => {
    fetch("http://localhost:8000/users")
    .then((ser) => {
      return ser.json()
    })
      .then((data) => {
        let resuth = data.find((item) => {
        return item.email == names.email
        })
        if (resuth) {
          alert("tai khoan da ton lai")
        } else {
          sevaUser(names)
          alert("dang ki thah cong")
          navigate("/Login");
        }
    })
  }
  const sevaUser=(user) => {
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .catch(err=>console.log(err))
  }
  return (
    <>
      REGITER <br />
      <label htmlFor="">username</label>
      <input type="text" name="name" onChange={handlechale} />
      <br />
      <label htmlFor="">Email</label>
      <input type="text" name="email" onChange={handlechale} />
      <br />
      <label htmlFor="">Passwosrt</label>
      <input type="password" name="password" onChange={handlechale} />
      <button onClick={handClick}>regiter</button>
      <p>bbbbbbbbbbb</p>
    </>
  );
}
