import React from 'react';

const LogoComponent = () => {
    return (
        <div className='logocomponent'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='campus-logo'></img>
            <h3>CampusName</h3>
        </div>
    );
}

export default LogoComponent;
