import { Avatar, AvatarBadge, Box, useColorMode, Text, Divider } from '@chakra-ui/react';
import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { USERNAME } from '../../classes/student';

const UserComponent = () => {
    
    const username = USERNAME.getUsername;
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box className='userheaderimg' id='menulist'>
            <Menu>
                <MenuButton as={Button} variant='transparent' size='sm' rightIcon={<ChevronDownIcon />}>
                    <Avatar size='sm' name={username} bg='teal.500' src='' id='avatar'>
                        <AvatarBadge boxSize='1.25em' bg='green.500' />
                    </Avatar>
                </MenuButton>
                <MenuList>
                    <MenuItem>
                        <Text fontSize='xl' as='b'>{username} :</Text>
                    </MenuItem>
                    <Divider/>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={toggleColorMode}>
                        Change to: {colorMode === 'light' 
                                        ? <MoonIcon m='0.5em'/> 
                                        : <SunIcon m='0.5em'/>
                                    }
                    </MenuItem>
                    <MenuItem>
                        <Link to='/learningCampus-website'>Log Out</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
}

export default UserComponent;
