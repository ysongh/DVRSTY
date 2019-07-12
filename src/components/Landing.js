import React from 'react';
import Logo from '../img/Logo.png';

const Landing = () => {
    return(
        <div>
            <img src={Logo} className="landing__image center" alt="Logo"/>
            <p className="landing__information center">
                Anomalies in temperature, CO2, dew point, and humidity can have devastating effect on a Biosphere. With DVRSTY,
                we have a web based application that identifies anomalies in a systemic and timely manner. One that is beneficial
                and user friendly for the horticulturists.
            </p>
            <button className="landing__button center">Enter</button>
        </div>
    )
}

export default Landing;