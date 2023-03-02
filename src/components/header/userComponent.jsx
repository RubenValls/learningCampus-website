import { Avatar, AvatarBadge, useColorMode } from '@chakra-ui/react';
import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';

const UserComponent = () => {
    
    const username = 'Rubén Valls';
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className='userheaderimg'>
            <Menu>
                <MenuButton as={Button} variant='transparent' size='sm' rightIcon={<ChevronDownIcon />}>
                    <Avatar size='sm' name={username} bg='teal.500' src='' id='avatar'>
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                </MenuButton>
                <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>
                        <Button onClick={toggleColorMode}>
                            Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                        </Button>
                    </MenuItem>
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}

export default UserComponent;
