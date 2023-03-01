import { Button } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons'
import React from 'react';

const HelpusComponent = () => {
    
    const link = 'https://github.com/sponsors/Open-Bootcamp';

    return (
        <a href={link} id='supportbtn'>
            <Button leftIcon={<CheckIcon />} colorScheme='teal' variant='solid' size='xs'>
                Support Us!
            </Button>
        </a>
    );
}

export default HelpusComponent;
