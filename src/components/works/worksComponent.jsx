import { Center, Flex, Box, Image, Text, VStack, Square } from '@chakra-ui/react';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Workcardsfront from './workcardsfront';
import Workcardsback from './workcardsback';
import Workcardsfull from './workcardsfull';

const WorksComponent = () => {
    return (
        <Flex>
            <Square w='25vw' borderRight='1px solid teal'>
                <Center h='100%'>
                    <VStack p='1em'>
                        <Link to='/learningCampus-website/campus/works/frontend'>
                            <Box w='90%' m='auto' className='worksnav'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/9172/9172978.png' alt='Front-end icon' w='7.5em' m='auto'/>
                                <Text fontSize='xl'>Front End</Text>
                            </Box>
                        </Link>
                        <Link to='/learningCampus-website/campus/works/backend'>
                            <Box w='90%' m='auto' pt='1em' className='worksnav'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/8099/8099237.png' alt='Back-end icon' w='7.5em' m='auto'/>
                                <Text fontSize='xl'>Back End</Text>
                            </Box>
                        </Link>
                        <Link to='/learningCampus-website/campus/works/fullstack'>
                            <Box w='90%' m='auto' pt='1em' className='worksnav'>
                                <Image src='https://cdn-icons-png.flaticon.com/512/5432/5432927.png' alt='Full Stack icon' w='7.5em' m='auto'/>
                                <Text fontSize='xl'>Full Stack</Text>
                            </Box>
                        </Link>
                    </VStack>
                </Center>
            </Square>
            <Square bg='light' w='75vw' p='1em'>
                <Center h='100%'>
                    <Routes>
                        <Route path='frontend' element={<Workcardsfront/>}></Route>
                        <Route path='backend' element={<Workcardsback/>}></Route>
                        <Route path='fullstack' element={<Workcardsfull/>}></Route>
                        <Route></Route>
                    </Routes>
                </Center>
            </Square>
        </Flex>
        
    );
}

export default WorksComponent;
