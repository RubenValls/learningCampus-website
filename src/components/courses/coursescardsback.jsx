import { Box, Card, CardBody, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Coursescardsback = () => {
    return (
        <SimpleGrid minChildWidth='120px' spacing='40px'>
            <Box height='auto'>
                <Card maxW='sm'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Heading>BACK</Heading>
                        <Text>DESCRIPTION</Text>
                    </CardBody>
                </Card>
            </Box>
        </SimpleGrid>
    );
}

export default Coursescardsback;
