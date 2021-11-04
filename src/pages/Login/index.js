import { useState } from 'react';
import Logo from '../../components/Logo';
import FormLogin from '../../components/FormLogin';
import Button from '../../components/Button';
import './styles.css'

function App() {
  const [userData, setUserData] = useState({
    user:"",
    password: "",
    passwordConfirm:""
  });
  
  return (
    <>
      <div className="container-logo">
        <Logo />
      </div>
      <div className="container-form">
        <FormLogin userData={userData} setUserData={setUserData}/>
        <Button name="Registrar" dataId="usuario" data={userData}/>
      </div>
    </>
  );
}

export default App;
