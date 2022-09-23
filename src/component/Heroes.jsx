import React, { useState } from 'react';

import { DataCarousel } from '../Data/back';
import '../styles/component/heroes.scss'

const Heroes = () => {
       const [currImg, setCurrImg] = useState(0);


    // useEffect(() => {
    //     axios.
    //         get(`http://localhost:5000/api-consulat`)
    //         .then((res) => {
    //         SetData(res.data[0].Actualite)
    //     })
    // })

  const handleLeftSlide = () => {
    currImg > 0 && setCurrImg(currImg - 1)
  }

  const handleRigntSlide = () => {
 
    if ( currImg < (DataCarousel.length - 1) ) {
      setCurrImg(currImg + 1);
    
    }
  
  


  }
  
  // setInterval(() => {
  //   handleRigntSlide();
  // }, 5000);
   
     
    return (


      <div className="carousel">
        
          
            <div
                style={{ backgroundImage: `url(${DataCarousel[currImg].Img})` }}
                className="carouselImg">
            
      <i  onClick={handleLeftSlide} className="fa-sharp fa-solid fa-chevron-left"></i>
            
                <i  onClick={handleRigntSlide} className="fa-sharp fa-solid fa-chevron-right"></i>

              

            </div>
            </div>       
          
           
     
      
     
     
    );
};

export default Heroes;