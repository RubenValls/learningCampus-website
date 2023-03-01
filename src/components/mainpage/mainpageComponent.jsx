import React from 'react';
import HeaderComponent from '../header/headerComponent';
import NavbarComponent from '../navbar/navbarComponent';
import MainpagebodyComponent from './mainpagebody/mainpagebodyComponent';

const MainpageComponent = () => {
    return (
        <div className="App">
            <HeaderComponent/>
            <NavbarComponent/>
            <MainpagebodyComponent/>
        </div>
    );
}

export default MainpageComponent;
