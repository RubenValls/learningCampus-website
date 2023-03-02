import { Box, Card, CardBody, Heading, Text } from '@chakra-ui/react';
import React from 'react';

const StagesComponent = () => {
    return (
        <Box w='100%' pt='1em'>
            <Heading>OpenBootcamp's stages to be Front-End Developer</Heading>
            <Card m='1em'>
                <CardBody>
                    <Text fontSize='md' mt='0.5em'>Open Bootcamp was born to reinvent specialized training. Our mission is that you can have access to the highest quality technological training at no cost. With our training, you will be able to access jobs that suit your needs. Depending on the moment you are in, you can choose between our two phases:</Text>
                </CardBody>
            </Card>
            <Heading>HERE WILL BE THE STEPS</Heading>
        </Box>

    );
}

export default StagesComponent;
