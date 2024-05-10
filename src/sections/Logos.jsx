import React from 'react';
import Google from '../assets/logo-google.png';
import HP from '../assets/logo-hp.png';
import IBM from '../assets/logo-ibm.png';
import MICROSOFT from '../assets/logo-microsoft.png';
import VECTOR from '../assets/logo-vector-graphics.png';

const Logos = () =>{
    return(
        <div className='mt-[150px]'>
            <div className='logos-div flex justify-center gap-[200px]'>
                <img src={Google}/>
                <img src={HP}/>
                <img src={IBM}/>
                <img src={MICROSOFT}/>
                <img src={VECTOR}/>
            </div>
        </div>
    )
}

export default Logos;