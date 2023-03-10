import { Center, Flex, Box, Image, Text, VStack, Square } from '@chakra-ui/react';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Coursescardsfull from './coursescardsfull';
import Coursescardsback from './coursescardsback';
import Coursescardsfront from './coursescardsfront';
import AllcoursesComponent from './allcoursesComponent';

const CoursesComponent = () => {
    return (
        <Flex>
            <Square w='25vw' borderRight='1px solid teal'>
                <Center h='100%'>
                    <VStack p='1em'>
                        <Link to='/learningCampus-website/campus/courses/frontend'>
                            <Box w='100%' m='auto' className='worksnav'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/9172/9172978.png' alt='Front-end icon' w='7.5em' m='auto'/>
                                <Text fontSize='lg'>Front End</Text>
                            </Box>
                        </Link>
                        <Link to='/learningCampus-website/campus/courses/backend'>
                            <Box w='100%' m='auto' pt='1em' className='worksnav'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/8099/8099237.png' alt='Back-end icon' w='7.5em' m='auto'/>
                                <Text fontSize='lg'>Back End</Text>
                            </Box>
                        </Link>
                        <Link to='/learningCampus-website/campus/courses/fullstack'>
                            <Box w='100%' m='auto' pt='1em' className='worksnav'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/5432/5432927.png' alt='Full Stack icon' w='7.5em' m='auto'/>
                                <Text fontSize='lg'>Full Stack</Text>
                            </Box>
                        </Link>
                        <Link to='/learningCampus-website/campus/courses/'>
                            <Box w='100%' m='auto' pt='1em' className='worksnav'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/9903/9903818.png' alt='see all icon' w='6.5em' m='auto'/>
                                <Text fontSize='lg'>See All</Text>
                            </Box>
                        </Link>
                    </VStack>
                </Center>
            </Square>
            <Square bg='light' w='70vw'>
                <Center h='100%'>
                    <Routes>
                        <Route path='/' element={<AllcoursesComponent/>}></Route>
                        <Route path='frontend' element={<Coursescardsfront/>}></Route>
                        <Route path='backend' element={<Coursescardsback/>}></Route>
                        <Route path='fullstack' element={<Coursescardsfull/>}></Route>
                    </Routes>
                </Center>
            </Square>
        </Flex>
    );
}

export default CoursesComponent;
