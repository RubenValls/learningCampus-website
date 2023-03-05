import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Heading, Text, SimpleGrid, Center, Divider, Badge, List, ListItem, ListIcon } from '@chakra-ui/react';
import React from 'react';

const StagesComponent = () => {
    return (
        <Box w='100%' pt='1em'>
            <Heading>OpenBootcamp's stages to be Front-End Developer</Heading>
            <SimpleGrid minChildWidth='350px' spacing='0.5em' m='1em' id='welcomegrid'>
            <Box height='14em'>
                <Center h='100%'>
                    <Card height='13em'>
                        <CardBody h='100%'>
                            <Text fontSize='md' mt='0.5em'>Open Bootcamp was born to reinvent specialized training. Our mission is that you can have access to the highest quality technological training at no cost. With our training, you will be able to access jobs that suit your needs. Depending on the moment you are in, you can choose between our two phases:</Text>
                        </CardBody>
                    </Card>
                </Center>
            </Box>
            <Box height='14em'>
                <Center h='100%'>
                    <Card w='100%' height='13em' className='phasestagecard'>
                        <CardBody h='100%' mt='0em'>
                            <Text fontSize='xl' mt='0.1em' mb='0.5em'>
                                <Badge variant='subtle' colorScheme='green' fontSize='1.5em' mr='0.25em' mb='0.25em'>#1</Badge>
                                <Text as='b'>INCUBATION</Text> PHASE
                            </Text>
                            <Divider/>
                            <Text mt='1.5em'>
                                At this level we will introduce you and prepare you academically to be a developer.
                            </Text>
                        </CardBody>
                    </Card>
                </Center>
            </Box>
            <Box height='14em'>
                <Center h='100%'>
                    <Card w='100%' height='13em' className='phasestagecard'>
                        <CardBody h='100%' mt='0em'>
                            <Text fontSize='xl' mt='0.1em' mb='0.5em'>
                                <Badge variant='subtle' colorScheme='green' fontSize='1.5em' mr='0.25em' mb='0.25em'>#2</Badge>
                                <Text as='b'>ACCELERATION</Text> PHASE
                            </Text>
                            <Divider/>
                            <List spacing={3} mt='0.5em'>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='green.500' />Finish a course
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='green.500' />Complete your profile
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={CheckCircleIcon} color='green.500' />Join a boost
                                </ListItem>
                            </List>
                        </CardBody>
                    </Card>
                </Center>
            </Box>
            <Box height='14em'>
                <Center h='100%'>
                    <Card w='100%' height='13em' className='phasestagecard'>
                        <CardBody h='100%' mt='0em'>
                            <Text fontSize='xl' mt='0.1em' mb='0.5em'>
                                <Badge variant='subtle' colorScheme='green' fontSize='1.5em' mr='0.25em' mb='0.25em'>#3</Badge>
                                <Text as='b'>LABORAL</Text> PHASE
                            </Text>
                            <Divider/>
                            <Text mt='1.5em'>
                                To access to Laboral Phase you have to complete the previous stages. Here we will prepare you to job interviews. 
                            </Text>
                        </CardBody>
                    </Card>
                </Center>
            </Box>
        </SimpleGrid>
        </Box>

    );
}

export default StagesComponent;
