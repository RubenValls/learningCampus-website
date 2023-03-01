import React from 'react';

const HeaderComponent = () => {
    return (
        <div className='headercontainer'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt='campus-logo'></img>
        </div>
    );
}

export default HeaderComponent;
