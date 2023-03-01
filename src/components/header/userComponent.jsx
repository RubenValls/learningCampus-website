import React from 'react';

const UserComponent = () => {
    return (
        <div className='userheaderimg'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/user-img.png`} alt='user-img' width='45'></img>
            <span>UserName</span>
        </div>
    );
}

export default UserComponent;
