import React, { useEffect, useRef } from 'react';
import '../styles/component/oneEffect.scss';


import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';


const OneEffect = () => {
    const titleRef = useRef();
    const onLoad = () => {
        gsap.timeline().fromTo(
            ".letter",{
            x: -100,
                opacity: 0
,            },{
    x : 0
                ,
                opacity: 1, stagger: .33,
            delay:.7}
        )
    }
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    const SlideInLeft = (elem, delay, duration) => {
        gsap.fromTo(elem, {
            opacity: 0,
            x: -500
        },
            {
                opacity: 1,
                x: 0,
                delay: delay || 1,
                duration: duration || 1,
                ScrollTrigger: {
                    trigger: elem,
                    start: 'top center',
                    end: 'bottom center'
                }
            }
        )
           
    }
    useEffect(() => {
        SlideInLeft('#box1',"1","3")
    },[])
    useEffect(() => {
        SlideInLeft('#box2',"3","5")
    },[])
    useEffect(() => {
        SlideInLeft('#box3',"5","7")
    },[])
    useEffect(() => {
        onLoad()
    },[])
     const handleSrcoll = () => {
        if (window.scrollY > 100 ) {
           onLoad() 
      ;
         } 
       
         

    
    }
    window.addEventListener("scroll", handleSrcoll);
   
    return (
        <div className="oneEffect">
            <div className="container">
                <h1 className='title' ref={titleRef} >Une plateforme <span className='letter'>0</span>
                    <span className='letter'>3</span> <span className='letter'>M</span>  <span className='letter'> i</span> <span className='letter'> s</span> <span className='letter'> s</span> <span className='letter'> i</span> <span className='letter'> o</span>
                    <span className='letter'> n</span>
                <span className='letter'> s</span></h1>
                <hr className='hr'></hr>
                <div className="flexContainer">
                    <div id='box1' className="element">
                        <h2>
                            Formalisation
                        </h2>
                        <hr></hr>
                        <p>Rendre formel les acteurs informels de la micro finance en leur donnant  le statut d’entrepreneurs de la finance digitale.</p>
                    </div>
                    <div id='box2' className="element">
                        <h2>
                            Réorientation
                        </h2>
                        <hr></hr>
                        <p>
                            Réorienter  la politique de collecte d’Epargne et d’octroi de crédit en utilisant les nouveaux systhèmes de paiements mobiles. 
                        </p>
                    </div>
                    <div id='box3' className="element">
                        <h2>
                      Inclusion Financière
                        </h2>
                        <hr></hr>
                        <p>
                            Faciliter l’inclusion financière en rendant les services bancaires accessibles aux couches les plus défavorisées.
                        </p>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default OneEffect;