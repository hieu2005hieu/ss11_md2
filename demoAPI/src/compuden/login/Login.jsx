import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [names, setNames] = useState({
    email: "",
    password:""
  });
  const navigate = useNavigate();
  const handlechale = (e) => {
    let { name, value } = e.target
    setNames({ ...names,[name]:value });
  }
  const handClick = () => {
     fetch("http://localhost:8000/users")
         .then((Response) => Response.json())
         .then((data) => {
            let resuth = data.find((item) => {
        return item.email == names.email && item.password == names.password;
        })
        if (resuth) {
           navigate("/Home")
        } else {
          alert("k co tai khoan")
        }
      });
   };
  return (
    <>
      LOGIN
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={handlechale} />
      <br />
      <label htmlFor="">Passwosrt</label>
      <input type="password" name='password' onChange={handlechale} />
      <br />
      <button onClick={handClick}>login</button>
    </>
  );
}
