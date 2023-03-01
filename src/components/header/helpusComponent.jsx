import React from 'react';

const HelpusComponent = () => {
    
    const link = 'https://github.com/sponsors/Open-Bootcamp';

    return (
        <a href={link} id='supportbtn'>
            <button type="button">
                Support Us!
            </button>
        </a>
    );
}

export default HelpusComponent;
