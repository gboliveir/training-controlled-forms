import { useState, FormEvent } from 'react';

import './styles.scss';

type FormPropsType = {
  titleForm: string;
  descriptionForm: string;
  buttonSubmitText: string;
  linkText: string;
  formController: (value: boolean) => void;
}

type User = {
  name: string,
  email: string,
  password:string,
}


export function Form({
  titleForm, 
  descriptionForm, 
  buttonSubmitText, 
  linkText,
  formController,
}:FormPropsType
){

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [users, setUsers] = useState([] as User[])

  function handleCreateUser(event: FormEvent) {
    event.preventDefault();

    if(email.trim() === '' || password.trim() === '') {
      alert("Erro, informações invalidas");
      return;
    }

    setUsers([...users, {name, email, password}])

  }

  return(
    <fieldset>
    <legend>{titleForm}</legend>
    <p>{descriptionForm}</p>
      <form onSubmit={handleCreateUser}>
        {titleForm !== 'Login' ? 
          <div className="group-input">
            <label htmlFor="nome">Nome</label>
            <input 
             type="text" 
             id="name" 
             placeholder="Insira seu nome aqui"
             onChange={event => setName(event.target.value)}
             value={name}
            />
          </div>
        : null }
       
        <div className="group-input">
          <label htmlFor="mail">Email</label>
          <input 
            type="email" 
            id="mail" 
            placeholder="Insira sua senha aqui"
            onChange={event => setEmail(event.target.value)}
            value={email}
          />
        </div>

        <div className="group-input">
          <label htmlFor="password">Senha</label>
          <input 
            type="text" 
            id="password" 
            placeholder="Insira seu email aqui"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </div>

        <div className="group-button">
          <button type="submit">{buttonSubmitText}</button>
          <a href="#" onClick={() => formController(false)}>{linkText}</a>
        </div>
      </form>
   </fieldset>
  );
}