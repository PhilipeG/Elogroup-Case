const functions = {
    validateUser: (userData) =>{
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

        if(!userData.user || !userData.password || !userData.passwordConfirm){
            alert("Preencha todos os campos");
        }

        else if(!re.test(userData.password)){
            alert("Password deve possuir ao menos 8 caracteres, contendo ao menos, um caracter especial, um caracter numérico e um alfanúmerico");
        }

        else if(userData.password !== userData.passwordConfirm){
            alert("As senhas informadas não são compatíveis");
        }

        else{
            return true
        }
    },

    validateLead : (leadData) => {
        if(!leadData.name || !leadData.phone || !leadData.email){
            alert("Preencha todos os campos");
        }

        else{
            return true;
        }
    }
}

export default functions;