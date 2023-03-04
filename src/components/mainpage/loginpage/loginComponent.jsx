import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginComponent = () => {
    return (
        <Box>
            <Heading>THIS IS LOGIN PAGE</Heading>
            <Link to='/learningCampus-website/campus'>
                <Button>Click Here to campus</Button>
            </Link>
        </Box>
    );
}

export default LoginComponent;
