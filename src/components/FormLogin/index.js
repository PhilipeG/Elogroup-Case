import React from 'react';
import './styles.css';

function FormLogin(props) {
    const  {userData, setUserData} = props;

    function handleChange(event){
        const {name, value} = event.target;

        setUserData({
            ...userData,
            [name]: value
        })
    }

    return (
        <form className="form-login">
            <label>Usuário:</label>
            <input type="text" id="user" name="user" value={userData.user} onChange={handleChange} required/>
            <label>Password:</label>
            <input type="text" id="password" name="password" value={userData.password} minLength="8" onChange={handleChange} required/>
            <label>confirmação Password:</label>
            <input type="text" id="password" name="passwordConfirm" value={userData.passwordConfirm} minLength="8" onChange={handleChange} required/>
        </form>
    );
}
  
export default FormLogin;