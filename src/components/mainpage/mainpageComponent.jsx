import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoursesComponent from '../courses/coursesComponent';
import FooterComponent from '../footer/footerComponent';
import HeaderComponent from '../header/headerComponent';
import NavbarComponent from '../navbar/navbarComponent';
import WorksComponent from '../works/worksComponent';
import MainpagebodyComponent from './mainpagebody/mainpagebodyComponent';

const MainpageComponent = () => {
    return (
        <div className="App">
            <HeaderComponent/>
            <NavbarComponent/>
            <Routes>
                <Route path='welcome' element={<MainpagebodyComponent/>}></Route>
                <Route path='works' element={<WorksComponent/>}></Route>
                <Route path='courses' element={<CoursesComponent/>}></Route>
            </Routes>
            <FooterComponent/>
        </div>
    );
}

export default MainpageComponent;
