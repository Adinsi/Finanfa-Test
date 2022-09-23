import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/component/theeEffect.scss'


const ThreeEffcet = () => {
   
    return (
        
            <div className="threeEffect">
            <div className="container">
                <div className="first">
                    <div className='containerImage'>
                        <img src='../images/epargne.jpg' alt='' />
                    </div>
                    <div className='containerTitre'>
                        <h1>
                            Epargne +
                        </h1>
                        <hr></hr>
                        <p>
                            Epargnez de façon sécuriser dans l'institution de votre choix avec un taux d'interet dynamique interressant.
                        </p>
                        <div>
                             <button className='consultation'><NavLink to='/'>
Consultation de solde
                        </NavLink></button>
                       </div>
                        <div>
                              <button><NavLink to='/'>
                            En savoir plus 
                        </NavLink></button>
                      </div>
                       
                    </div>
                </div>

                <div className="second">
                    <div className='containerTitre'>
                        <h1>
                            Credit
                        </h1>
                        <hr></hr>
                        <p>
                          Nous avons pour soucis de faciliter le processus d’octroi de crédit aux particuliers solvables La microfinance numérique pour lancer l’économie 
                        </p>
                        
                        <div>
                              <button><NavLink to='/'>
                            En savoir plus 
                        </NavLink></button>
                      </div>
                       
                    </div>
                    <div className='containerImage'>
                        <img src='../images/credit.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
        
        
    );
};

export default ThreeEffcet;