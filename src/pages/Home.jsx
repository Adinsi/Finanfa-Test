import React from 'react';
import FiveEffect from '../component/FiveEffect';
import Form from '../component/Form';
import FourEffect from '../component/FourEffect';
import Heroes from '../component/Heroes';
import Navigation from '../component/Navigation';
import OneEffect from '../component/OneEffect';
import ThreeEffcet from '../component/ThreeEffcet';
import TwoEffect from '../component/TwoEffect';
import '../styles/pages/home.scss';

const Home = () => {
    return (
        <div>
            <div>
             <Navigation />
            </div>
          <br></br><br /><br /><br /><br />
            <div>
                <Heroes/>
            </div>
            <div>
                <OneEffect />
            </div>
            <div>
                <TwoEffect/>
           </div>
            <div>
                <ThreeEffcet />
            </div>
            <div>
                <FourEffect />
            </div>
            <div>
                 <FiveEffect />
            </div>
            <div>
                <Form/>
            </div>
        </div>
    );
};

export default Home;