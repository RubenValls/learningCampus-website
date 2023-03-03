import { Box, Center, Text, Divider, Image, Link } from '@chakra-ui/react';
import React from 'react';

const FooterComponent = () => {
    return (
        <Box w='100%' bg='WhiteAlpha' borderTopWidth='1px'>
            <Center>
                <Image src='https://programacion-es.dev/img/openbootcamp-icon.webp' boxSize='35px' alt='openbootcamp-footer-logo'/>
                <Link href='https://campus.open-bootcamp.com/'>
                    <Text fontSize='md' as='b' p='0.5em'>
                        OpenBootcamp
                    </Text>
                </Link>
                <Center height='15px'>
                    <Divider orientation='vertical' />
                </Center>
                <Text fontSize='md' as='b' p='0.5em'>
                    Made by: 
                </Text>
                <Image src='https://i.ibb.co/VWxLJbq/valls-Sign.png' boxSize='30px' alt='author-sign'/>
            </Center>
        </Box>
    );
}

export default FooterComponent;
