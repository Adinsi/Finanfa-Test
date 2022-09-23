import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/component/twoEffect.scss';

const TwoEffect = () => {
   
    return (
        <div  id='special' className="Twoeffect">
            <div className="containerTwo">
              <h1>Que pouvez vous faire avec Finanfa ?</h1>
              <hr></hr>
                <div className="flexElement">
                    <div className="first">
     <h2>
Recevez, transférez et retirez
de l’argent en votre devise
préférée en toute sécurité.
                </h2>
             <p>   <button>
               <i class="fa-solid fa-check"></i>XOF Wallet - Portemonnaie
                </button></p>
                <p>
                    <button>
                <i class="fa-solid fa-check"></i>NGN Wallet - Portemonnaie
                </button>
                </p>
                <p>
                     <button>
                 <i class="fa-solid fa-check"></i> USDT Wallet - Portemonnaie
                </button>
               </p>
                <p>
                    <button className='principal'>
                    <NavLink to='/'>
Comment sa marche ?
                    </NavLink>
                </button>
                </p>
                    </div>
                    <div className="second">
<img src='../images/phone.png' alt='' />
                    </div>
                </div>
            </div>
      </div>
    );
};

export default TwoEffect;