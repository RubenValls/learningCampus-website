import React from 'react';
import HelpusComponent from './helpusComponent';
import LogoComponent from './logoComponent';

const HeaderComponent = () => {
    return (
        <div className='headercontainer'>
            <LogoComponent/>
            <HelpusComponent/>
        </div>
    );
}

export default HeaderComponent;
