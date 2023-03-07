import { Box, Card, CardBody, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';

const Coursescardfull = () => {
    return (
        <SimpleGrid minChildWidth='200px' spacing='10px' w='100%'>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                        alt='Typescript-icon course'
                        borderRadius='lg'
                        />
                        <Heading>Understand TypeScript</Heading>
                        <Text>Boost your JavaScript projects with TypeScript.</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
                        alt='Redux-icon course'
                        borderRadius='lg'
                        />
                        <Heading>React with Redux</Heading>
                        <Text>Master React and Redux Toolkit and more!</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                        alt='NodeJS-icon course'
                        borderRadius='lg'
                        />
                        <Heading>Complete NodeJS Developer</Heading>
                        <Text>Learn from real NodeJS experts! Includes Advanced NodeJS.</Text>
                    </CardBody>
                </Card>
            </Box>
            <Box height='auto'>
                <Card maxW='xl' h='450px'>
                    <CardBody>
                        <Image
                        src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                        alt='NextJS-icon course'
                        borderRadius='lg'
                        />
                        <Heading>Next.js by Example</Heading>
                        <Text>Develop static websites and hybrid (static+SSR) web apps with NextJS.</Text>
                    </CardBody>
                </Card>
            </Box>
        </SimpleGrid>
    );
}

export default Coursescardfull;
