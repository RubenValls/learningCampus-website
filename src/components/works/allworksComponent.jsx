import React from 'react';
import { Box, Divider, Text } from '@chakra-ui/react';
import Workcardsfront from './workcardsfront';
import Workcardsback from './workcardsback';
import Workcardsfull from './workcardsfull';

const AllworksComponent = () => {
    return (
        <Box>
            <Box>
                <Text fontSize='xl' as='b'>Front End</Text>
                <Divider mb='1em'></Divider>
                <Workcardsfront/>
            </Box>
            <Box mt='2em'>
                <Text fontSize='xl' as='b'>Back End</Text>
                <Divider mb='1em'></Divider>
                <Workcardsback/>
            </Box>
            <Box mt='2em'>
                <Text fontSize='xl' as='b'>Full Stack</Text>
                <Divider mb='1em'></Divider>
                <Workcardsfull/>
            </Box>
        </Box>
    );
}

export default AllworksComponent;
