import { Route, Routes } from 'react-router-dom';
import React from 'react';
import FooterComponent from '../footer/footerComponent';
import HeaderComponent from '../header/headerComponent';
import NavbarComponent from '../navbar/navbarComponent';
import MainpagebodyComponent from './mainpagebody/mainpagebodyComponent';
import LoginComponent from './loginpage/loginComponent';

const MainpageComponent = () => {
    return (
        <div className="App">
            <HeaderComponent/>
            <NavbarComponent/>
            <Routes>
                <Route path='/' component = {<LoginComponent/>}/>
                <Route path='/campus' component = {<MainpagebodyComponent/>}/>
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default MainpageComponent;
