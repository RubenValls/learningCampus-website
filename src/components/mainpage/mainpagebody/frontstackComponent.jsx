import { Box, Heading, SimpleGrid} from '@chakra-ui/react';
import React from 'react';
import FrontComponent from './routesComponent/frontComponent';
import FullstackComponent from './routesComponent/fullstackComponent';

const FrontstackComponent = () => {
    return (
        <Box m='1em' maxW='100%'>
            <Heading>Front-End Routes and Stack</Heading>
            <SimpleGrid minChildWidth='300px' spacing='0.5em' pt='1em' m='1em'>
                <FrontComponent/>
                <FullstackComponent/>
            </SimpleGrid>
        </Box>

    );
}

export default FrontstackComponent;
