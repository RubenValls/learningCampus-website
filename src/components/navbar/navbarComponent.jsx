import React from 'react';
import { Divider, Center, useDisclosure, Box, Text, VStack} from '@chakra-ui/react'
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
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box className='navbarcontainer'>
                <Link to='/learningCampus-website/campus/welcome'>
                    <Button colorScheme='gray' variant='ghost' className='navbtn'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1946/1946488.png' alt='homeicon' width='25'/>
                        <Text fontSize='md' className='navtext'>Home</Text>
                    </Button>
                </Link>
                <Center height='25px'>
                        <Divider orientation='vertical' />
                </Center>
                <Link to='/learningCampus-website/campus/works'>
                    <Button colorScheme='gray' variant='ghost' className='navbtn'>
                        <img src='https://cdn-icons-png.flaticon.com/512/1063/1063376.png' alt='worksicon' width='25'/>
                        <Text fontSize='md' className='navtext'>Works</Text>
                    </Button>
                </Link>
                <Center height='25px'>
                    <Divider orientation='vertical' />
                </Center>
                <Link to='/learningCampus-website/campus/courses'>
                    <Button colorScheme='gray' variant='ghost' className='navbtn'>
                        <img src='https://cdn-icons-png.flaticon.com/512/2000/2000887.png' alt='coursesicon' width='25'/>
                        <Text fontSize='md' className='navtext'>Courses</Text>
                    </Button>
                </Link>
                <Center height='25px'>
                    <Divider orientation='vertical' />
                </Center>
                <Button colorScheme='gray' variant='ghost' ref={btnRef} onClick={onOpen} className='navbtn'>
                    <img src='https://cdn-icons-png.flaticon.com/512/570/570223.png' alt='newsicon' width='25'/>
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
                    <DrawerHeader>
                        <Text fontSize='3xl'>More info: </Text>
                    </DrawerHeader>

                    <DrawerBody>
                        <Text fontSize='lg'>Works by role:</Text>
                        <VStack>
                            <Link to='/learningCampus-website/campus/works/frontend'>
                                <Text fontSize='md'>Front End Jobs</Text>
                            </Link>
                            <Link to='/learningCampus-website/campus/works/backend'>
                                <Text fontSize='md'>Back End Jobs</Text>
                            </Link>
                            <Link to='/learningCampus-website/campus/works/fullstack'>
                                <Text fontSize='md'>Full Stack Jobs</Text>
                            </Link>
                        </VStack>                        
                        <Divider mt='1em'></Divider>
                        <Text fontSize='lg' mt='1em'>Courses by role:</Text>
                        <VStack>
                            <Link to='/learningCampus-website/campus/courses/frontend'>
                                <Text fontSize='md'>Front End Courses</Text>
                            </Link>
                            <Link to='/learningCampus-website/campus/courses/backend'>
                                <Text fontSize='md'>Back End Courses</Text>
                            </Link>
                            <Link to='/learningCampus-website/campus/courses/fullstack'>
                                <Text fontSize='md'>Full Stack Courses</Text>
                            </Link>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <LogoComponent/>
                    </DrawerFooter>
                    </DrawerContent>
                </Drawer>
        </Box>
    );
}

export default NavbarComponent;
