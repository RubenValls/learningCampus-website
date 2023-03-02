import { Avatar, AvatarBadge } from '@chakra-ui/react';
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
                    <MenuItem>D/L Mode</MenuItem>
                    <MenuItem>Log Out</MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}

export default UserComponent;
