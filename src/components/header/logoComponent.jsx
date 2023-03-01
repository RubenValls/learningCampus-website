import React from 'react';

const LogoComponent = () => {
    return (
        <div className='logocomponent'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='campus-logo' width='45'></img>
            <h4>CampusName</h4>
        </div>
    );
}

export default LogoComponent;
