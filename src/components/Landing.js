import React from 'react';
import Sky from 'react-sky';

import Logo from '../img/Logo.png';
import newLeaf from '../img/newLeaf.png'

const Landing = () => {
    return(
        <div className="center">
            <Sky
                images={{
                    0: newLeaf
                }}
                how={200} /* Pass the number of images Sky will render chosing randomly */
                time={40} /* time of animation */
                size={'70px'} /* size of the rendered images */
                background={'#a5f035'} /* color of background *//>
            <div className="row">
                <div className="col s6 offset-s3">
                <div className="card landing__card darken-1">
                    <div className="card-content black-text">
                        <img src={Logo} className="landing__image center" alt="Logo"/>
                        <p>Anomalies in temperature, CO2, dew point, and humidity can have devastating effect on a Biosphere. With DVRSTY,
                        we have a web based application that identifies anomalies in a systemic and timely manner. One that is beneficial
                        and user friendly for the horticulturists.</p>
                    </div>
                    <div className="card-action green-text">
                        <a className="green-text" href="/">Enter</a>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
    )
}

export default Landing;