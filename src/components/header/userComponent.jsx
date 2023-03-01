import { Avatar, AvatarBadge } from '@chakra-ui/react';
import React from 'react';

const UserComponent = () => {
    return (
        <div className='userheaderimg'>
            <Avatar size='sm' name='User Name' src='https://www.svgrepo.com/show/313172/user.svg'>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
            </Avatar>
            <span>UserName</span>
        </div>
    );
}

export default UserComponent;
