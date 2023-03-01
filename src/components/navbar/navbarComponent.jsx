import React from 'react';
import { Divider, Center } from '@chakra-ui/react'

const NavbarComponent = () => {
    return (
        <div className='navbarcontainer'>
            <a href='#'>
                <img src='https://www.svgrepo.com/show/485567/home-2.svg' alt='homeicon' width='35'/>
                <span>Home</span>
            </a>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <a href='#'>
                <img src='https://www.svgrepo.com/show/485559/edit.svg' alt='worksicon' width='35'/>
                <span>Works</span>
            </a>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <a href='#'>
                <img src='https://www.svgrepo.com/show/485570/layer.svg' alt='coursesicon' width='35'/>
                <span>Courses</span>
            </a>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <a href='#'>
                <img src='https://www.svgrepo.com/show/485566/file.svg' alt='newsicon' width='35'/>
                <span>News</span>
            </a>
        </div>
    );
}

export default NavbarComponent;
