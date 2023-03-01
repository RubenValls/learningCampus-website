import { Button } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Icon } from '@chakra-ui/react'
import React from 'react';

const DarklightComponent = () => {
    return (
        <Button colorScheme='teal' variant='outline' size='xs'>
            <Icon as={SunIcon}></Icon>
            /
            <Icon as={MoonIcon}></Icon>
        </Button>
    );
}

export default DarklightComponent;
