import { Box, Card, CardBody, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Coursescardsfront = () => {
    return (
        <SimpleGrid minChildWidth='200px' spacing='10px' w='100%'>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                        alt='ReactJS-icon course'
                        borderRadius='lg'
                        />
                        <Heading>ReactJS - Expert Guide</Heading>
                        <Text>Dive in and learn React.js, Hooks, Redux & React Routing</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg'
                        alt='sass-icon course'
                        borderRadius='lg'
                        />
                        <Heading>The Complete SASS</Heading>
                        <Text>Learn SASS, the most popular CSS Extension. Build modern and beautiful projects using SASS.</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                        alt='Tailwind-icon course'
                        borderRadius='lg'
                        />
                        <Heading>Tailwind CSS From Scratch</Heading>
                        <Text>Build great looking layouts fast and efficiently using Tailwind CSS utility classes.</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg'
                        alt='VueJS-icon course'
                        borderRadius='lg'
                        />
                        <Heading>The Complete Guide</Heading>
                        <Text>Learn VueJS and build a complete project using Vue.</Text>
                    </CardBody>
                </Card>
            </Box>
        </SimpleGrid>
    );
}

export default Coursescardsfront;
