import React from 'react';
import './styles.css';

function FormLead(props) {
    const {leadData, setLeadData} = props;

    function handleChange(event){
        const {name, value} = event.target;

        setLeadData({
            ...leadData,
            [name]: value
        })
    }

    return (
        <form className="form-lead">
            <label>Nome</label>
            <input type="text" id="name" name="name" value={leadData.name} onChange={handleChange} required/>
            <label>Telefone</label>
            <input type="tel" id="phone" name="phone" value={leadData.phone} onChange={handleChange} required/>
            <label>Email</label>
            <input type="email" id="email" name="email" value={leadData.email} onChange={handleChange} required/>
        </form>
    );
}
  
export default FormLead;