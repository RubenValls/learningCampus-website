import React from 'react';
import FooterComponent from '../footer/footerComponent';
import HeaderComponent from '../header/headerComponent';
import NavbarComponent from '../navbar/navbarComponent';
import MainpagebodyComponent from './mainpagebody/mainpagebodyComponent';

const MainpageComponent = () => {
    return (
        <div className="App">
            <HeaderComponent/>
            <NavbarComponent/>
            <MainpagebodyComponent/>
            <FooterComponent/>
        </div>
    );
}

export default MainpageComponent;
