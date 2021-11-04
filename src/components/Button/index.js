import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import validations from '../../utils/validation';

function Button(props) {
    const history = useHistory()
    
    const {name, data, dataId} = props;

    function saveData(dataId, data){
        if(dataId === "usuario"){
            if(validations.validateUser(data)){
                localStorage.setItem(dataId, JSON.stringify(data));
                history.push("/leads")
            }
        }

        if(dataId === "leads"){
            if(validations.validateLead(data)){
                let leads = [];
                if(localStorage.hasOwnProperty("leads")){
                    leads = JSON.parse(localStorage.getItem("leads"));
                }

                leads.push(data);
                localStorage.setItem(dataId, JSON.stringify(leads));
                alert("Lead salvo com sucesso!")
                window.location.assign('http://localhost:3000/painel-leads');
            }
        }

        else{
            window.location.assign('http://localhost:3000/leads');
        }
    }

    return (
        <button className="register-button" onClick={() => { saveData(dataId, data) }}>{name}</button> 
    );
}


  
export default Button;