import { Box, Button, Center, Heading, Image, Input } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { USERNAME } from '../../../classes/student';

const LoginComponent = () => {
    
    function checkUser(){
        const username = document.querySelector('#userinput').value;
        if(username.length > 0 && !username.includes(" ")){
            USERNAME.setUsername(username)
        }else{
            alert("WRONG USERNAME")
            window.location.href = '/learningCampus-website'
        }
    }

    return (
        <Center h='100vh'>
            <Box borderWidth='1.75px' borderRadius='lg' p='2em' pt='0' borderColor='teal.400' w='30em' id='loginbox'>
                <Image src='https://vlctesting.es/wp-content/uploads/2022/08/Open-Bootcamp.png' w='20em' m='auto'></Image>
                <Heading as='h2'>Write your Username</Heading>
                <Input variant='flushed' placeholder='Username' pt='1em' id='userinput'/>
                <Link to='/learningCampus-website/campus/welcome'>
                    <Button mt='1em' colorScheme='teal' variant='solid' onClick={checkUser}>Log In</Button>
                </Link>
            </Box>
        </Center>
    );
}

export default LoginComponent;
