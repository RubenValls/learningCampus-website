import React from 'react';
import Coursescardsfull from './coursescardsfull';
import Coursescardsback from './coursescardsback';
import Coursescardsfront from './coursescardsfront';
import { Box, Divider, Text } from '@chakra-ui/react';

const AllcoursesComponent = () => {
    return (
        <Box>
            <Box>
                <Text fontSize='xl' as='b'>Front End</Text>
                <Divider mb='1em'></Divider>
                <Coursescardsfront/>
            </Box>
            <Box mt='2em'>
                <Text fontSize='xl' as='b'>Back End</Text>
                <Divider mb='1em'></Divider>
                <Coursescardsback/>
            </Box>
            <Box mt='2em'>
                <Text fontSize='xl' as='b'>Full Stack</Text>
                <Divider mb='1em'></Divider>
                <Coursescardsfull/>
            </Box>
        </Box>
    );
}

export default AllcoursesComponent;
