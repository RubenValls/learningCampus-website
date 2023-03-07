import { Box, Card, CardBody, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Coursescardsback = () => {
    return (
        <SimpleGrid minChildWidth='200px' spacing='10px' w='100%'>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg'
                        alt='Adonis-icon course'
                        borderRadius='lg'
                        />
                        <Heading>AdonisJS at Back End</Heading>
                        <Text>Learn AdonisJs by building a production-ready application completely from scratch.</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg'
                        alt='Deno-icon course'
                        borderRadius='lg'
                        />
                        <Heading>Deno Js w/ Rust</Heading>
                        <Text>The easiest, most secure JavaScript runtime.</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
                        alt='Django-icon course'
                        borderRadius='lg'
                        />
                        <Heading>Django - Practical Guide</Heading>
                        <Text>How to build web applications with Python and Django.</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
                        alt='Mongodb-icon course'
                        borderRadius='lg'
                        />
                        <Heading>Developer's Guide</Heading>
                        <Text>Master MongoDB Development for Web & Mobile Apps and CRUD Operations.</Text>
                    </CardBody>
                </Card>
            </Box>
        </SimpleGrid>
    );
}

export default Coursescardsback;
