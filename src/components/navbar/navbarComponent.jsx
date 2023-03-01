import React from 'react';
import { Divider, Center } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

const NavbarComponent = () => {
    return (
        <div className='navbarcontainer'>
            <a href='#'>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747589.png' alt='homeicon' width='30'/>
                <Text fontSize='lg' className='navtext'>Home</Text>
            </a>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <a href='#'>
                <img src='https://cdn-icons-png.flaticon.com/512/1972/1972090.png' alt='worksicon' width='30'/>
                <Text fontSize='lg' className='navtext'>Works</Text>
            </a>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <a href='#'>
                <img src='https://cdn-icons-png.flaticon.com/512/749/749064.png' alt='coursesicon' width='30'/>
                <Text fontSize='lg' className='navtext'>Courses</Text>
            </a>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <a href='#'>
                <img src='https://cdn-icons-png.flaticon.com/512/3771/3771152.png' alt='newsicon' width='30'/>
                <Text fontSize='lg' className='navtext'>News</Text>
            </a>
        </div>
    );
}

export default NavbarComponent;
