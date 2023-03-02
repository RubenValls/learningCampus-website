import React from 'react';
import { Divider, Center, useDisclosure } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import LogoComponent from '../header/logoComponent';

const NavbarComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className='navbarcontainer'>
            <Button colorScheme='teal' variant='ghost' className='navbtn'>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747589.png' alt='homeicon' width='25'/>
                <Text fontSize='md' className='navtext'>Home</Text>
            </Button>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <Button colorScheme='teal' variant='ghost' className='navbtn'>
                <img src='https://cdn-icons-png.flaticon.com/512/1972/1972090.png' alt='worksicon' width='25'/>
                <Text fontSize='md' className='navtext'>Works</Text>
            </Button>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <Button colorScheme='teal' variant='ghost' className='navbtn'>
                <img src='https://cdn-icons-png.flaticon.com/512/749/749064.png' alt='coursesicon' width='25'/>
                <Text fontSize='md' className='navtext'>Courses</Text>
            </Button>
            <Center height='25px'>
                <Divider orientation='vertical' />
            </Center>
            <Button colorScheme='teal' variant='ghost' ref={btnRef} onClick={onOpen} className='navbtn'>
                <img src='https://cdn-icons-png.flaticon.com/512/2039/2039135.png' alt='newsicon' width='25'/>
                <Text fontSize='md' className='navtext'>More</Text>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>More info: </DrawerHeader>

                <DrawerBody>
                    <h1>WILL BE THINGS HERE</h1>
                </DrawerBody>

                <DrawerFooter>
                    <LogoComponent/>
                </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default NavbarComponent;
