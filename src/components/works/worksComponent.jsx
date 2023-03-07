import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

const WorksComponent = () => {
    return (
        <Grid
            h='83vh'
            templateRows='repeat(1, 1fr)'
            templateColumns='repeat(2, 1fr)'
            >
            <GridItem bg='tomato' w='10vw'/>
            <GridItem bg='papayawhip' w='90vw' />
        </Grid>
        
    );
}

export default WorksComponent;
