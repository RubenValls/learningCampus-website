import { Box, Center, Text, Divider, Image, Link, Button } from '@chakra-ui/react';
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
                <Link href='https://www.linkedin.com/in/rubenvallsaparici/' isExternal pr='0.25em'>
                    <Button colorScheme='teal' variant='outline' size='xs' p='0'>
                        <Image src='https://www.pngmart.com/files/21/Linkedin-In-Logo-PNG-HD.png' w='2em'></Image>
                    </Button>
                </Link>
                <Link href='https://github.com/RubenValls' isExternal>
                    <Button colorScheme='teal' variant='outline' size='xs' p='0'>
                        <Image src='https://cdn-icons-png.flaticon.com/512/25/25231.png' w='1.85em' p='0.1em'></Image>
                    </Button>
                </Link>
            </Center>
        </Box>
    );
}

export default FooterComponent;
