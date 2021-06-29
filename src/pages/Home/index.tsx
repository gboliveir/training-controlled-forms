import { useState } from 'react';
import { Form } from '../../components/Form'

import './styles.scss';

export function Home() {
  const [isFormLogin, setIsFormLogin] = useState(true);


  return(
    <div id="page-home">
      {isFormLogin ?
      (<Form 
        titleForm="Login" 
        descriptionForm="Insira as informações para realizar seu login." 
        buttonSubmitText="Entrar" 
        linkText="Não tenho um cadastro"
        formController={() => setIsFormLogin(false)}
      />) : 
        <Form 
          titleForm="Cadastro" 
          descriptionForm="Insira as informações para realizar seu cadastro." 
          buttonSubmitText="Criar conta" 
          linkText="Já sou cadastrado no sistema"
          formController={() => setIsFormLogin(true)}
        />}
    </div>
  );
 }