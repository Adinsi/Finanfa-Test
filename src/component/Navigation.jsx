import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/component/navigation.scss';

const Navigation = () => {
     const [showBurger, setshowBurger] = useState(false);
    const handleShowBurger = () => {
        setshowBurger(!showBurger);
        setLangueState(false);
        setLinkState(false)
    }
              //    Fonction pour gérer le state de la langue 
    const [LangState, setLangueState] = useState(false)
    const handleLanguage = () => {
        setLangueState(!LangState)
    };
    const [LinkState, setLinkState] = useState(false)
    const handleLink = () => {
        setLinkState(!LinkState)
    };

             // Desactiver le menu au scroll de la page 
           const scrolling = () => {
               setshowBurger(false);
               setLangueState(false);
               setLinkState(false)
  };

  window.addEventListener("scroll", scrolling);

    return (
            <nav>
            <div className="container">
                <div className="logo">
                      <NavLink to='/'> <img src='../images/logo.png' width={80} alt='Logo du site'/></NavLink>
              
                </div>
                <div className="links">
                    <ul className={showBurger ? "menu sticks" : "menu"}>
                        <li><NavLink to='/services'>Accueil</NavLink></li>
                      
                        <li  className='comment' ><NavLink to='/'>Comment ça marche<i onClick={handleLink}  className="fa-solid fa-circle-chevron-down"></i></NavLink>  
                         
 {
                            LinkState ? 
                                <div>
                                        <li>
                                             <NavLink to='/'>Produit</NavLink> 
                                        </li>
                                        <li>
                            <NavLink to='/' >Produits</NavLink>
                                        </li>
                                 
                                
                                    
                          </div> : null

                        }
                        </li>
                       
                     
                          <li><NavLink to='/'>Nos agences</NavLink></li>
                       <li><NavLink to='/'>Contact</NavLink></li>
                        <li className='butt'>
                            <button><NavLink>Creer un compte</NavLink></button>
                        </li>
                       
</ul>
                </div>
                <div className="fr"  >
                    <ul>

                    <li >FR<i onClick={handleLanguage}
                        className="fa-solid fa-circle-chevron-down"></i> 
                         
 {
                            LangState ? 
                                <div className='langue'>
                                   <NavLink to='/'>FRANCAIS</NavLink>
                                   <NavLink to='/' >ENGLISH</NavLink>
                                    
                          </div> : null

                        }
                        </li>
                    </ul>
                </div>
                <div onClick={handleShowBurger} className="MenuBurger">
                  <i className={showBurger ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
                </div>
            </div>
       
            
        </nav>
    );
};

export default Navigation;