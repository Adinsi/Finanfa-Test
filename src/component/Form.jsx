import React from 'react';
import '../styles/component/form.scss'

const Form = () => {
    return (
        <div className="formulaire">
            <div className="container">
                 <div className="first">
                <h2>Comment pouvons nous vous aidez ?</h2>
                    <p><i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-whatsapp"></i></p>
            </div>
            <div className="form">
                    <form action="" method="">
                            <div  className="formContainer">
                    <input type='text' id='complet' placeholder='Nom complet' />
                </div>
        
                <div className="formContainer">
                    
                    <input id='mail' type='email'   placeholder='Mail' />
                    <input  type='text' id='flex' placeholder='Telephone' />
                </div>
                  <div className="formContainer">
                    <select id="complets">
                        <option>Sujet 1</option>
                        <option>Sujet 2</option>
                        <option>Sujet 3</option>
                        <option>Sujet 4</option>
                        <option>Sujet 5</option>
              </select>
                </div>
                <div className="formContainer">
                    <button type='submit'>Envoyer</button>
                </div>
            </form>
            </div>
           </div>
        </div>
    );
};

export default Form;