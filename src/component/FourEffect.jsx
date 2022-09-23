import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/component/fourEffect.scss'

const FourEffect = () => {
    return (
        <div className="fourEffect">
            <div className="container">
                <h1>
 Avec Finanfa devenez un acteur  formel de la microfinance
                </h1>
                <hr className='hr'></hr>
                <div id='element1' className="element1">
                    <div className="imageContainer">
                         <img src='../images/tontine.png' alt=''/>
                    </div>
                    <div className="texteContainer">
                        <div className="texteElem">
                               <h2>
Tontine
                        </h2>
                        <hr></hr>
                        <p>
Cotisation sécurisée. Achat de biens et services à votre rythme. Souscrivez désormais à vos  tontine (Adogbè) depuis chez vous grâce
à Finanfa. 
                        </p>
                        <div>
 <button><NavLink to='/'>
                            En savoir plus 
                        </NavLink></button>
                        </div>
                     </div>
                       
                    </div>
                </div>
                <div className="element2">
                    <div className="texteContainer">
                        <div className="texteElem">
                             <h2>
Service +
                        </h2>
                        <hr></hr>
                        <p>
Réabonnement Canal+, Paiement facture d’électricité et d’eau, réservation, restaurant etc... Économisez du temps, de l’argent grâce à cette application.
                        </p>
                        <div>
 <button><NavLink to='/'>
                            En savoir plus 
                        </NavLink></button>
                        </div>
                       
                    </div>
                       </div>
                    <div className="imageContainer">
                         <img src='../images/service.jpg' alt=''/>
                    </div>
                </div>
              
                 <div className="element1">
                    <div className="imageContainer">
                         <img src='../images/boutique.png' alt=''/>
                    </div>
                    <div className="texteContainer">
                        <div className="texteElem">
                               <h2>
Boutique
                        </h2>
                        <hr></hr>
                        <p>
Acceptez les paiements en toute sécurité depuis votre boutique ou e-boutique en utilisant Finanfa. 
                        </p>
                        <div>
 <button><NavLink to='/'>
                            En savoir plus 
                        </NavLink></button>
                        </div>
                     </div>
                       
                    </div>
                </div>
            </div>
      </div>
    );
};

export default FourEffect;