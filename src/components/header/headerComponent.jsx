import React from 'react';
import HelpusComponent from './helpusComponent';
import LogoComponent from './logoComponent';
import UserComponent from './userComponent';

const HeaderComponent = (username) => {
    return (
        <div className='headercontainer'>
            <LogoComponent/>
            <HelpusComponent/>
            <UserComponent/>
        </div>
    );
}

export default HeaderComponent;
