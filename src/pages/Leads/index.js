import { useState } from 'react';
import Logo from '../../components/Logo';
import FormLead from '../../components/FormLead';
import CheckBoxTable from '../../components/CheckBoxTable';
import Button from '../../components/Button';
import './styles.css';

function App() {
  const [leadData, setLeadData] = useState({
    name:"",
    phone: "",
    email:"",
    status: "Cliente em Potencial"
  });

  return (
    <>
      <div className="grid-container">
        <div className="container-logo-leads">
          <Logo />
        </div>
        <div className="container-logo-leads">
          <h1>Novo Lead</h1>
        </div>

      </div>
      <div className="grid-container">
        <div className="container-form-leads">
          <FormLead leadData={leadData} setLeadData={setLeadData}/>
        </div>
        <div className="container-checkboxes">
          <CheckBoxTable />
          <Button name="Salvar" dataId="leads" data={leadData}/>
        </div>
      </div>
    </>
  );
}

export default App;