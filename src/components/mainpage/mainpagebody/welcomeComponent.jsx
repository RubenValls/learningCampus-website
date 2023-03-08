import { Box, Center, Heading, SimpleGrid, Text, Button, Image, Link, Divider } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import React from 'react';
import { USERNAME } from '../../../classes/student';

const WelcomeComponent = () => {
    
    const user = USERNAME
    
    return (
        <SimpleGrid minChildWidth='300px' spacing='0.5em' pt='1em' m='1em' id='welcomegrid'>
            <Box height='30em'>
                <Center h='100%'>
                    <Card align='center' h='100%'>
                    <Image src='https://vlctesting.es/wp-content/uploads/2022/08/Open-Bootcamp.png' boxSize='150px'></Image>
                    <CardHeader>
                        <Heading size='lg'> 👋 Hi {user.getUsername}! Welcome to a new Learning Platform</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Want to know more about us? Click the link below</Text>
                    </CardBody>
                    <CardFooter>
                        <Link href='https://www.youtube.com/watch?v=2uGDCCFmjas&t=474s' textDecoration={"none"}>
                            <Button colorScheme='teal' variant='outline'>View here</Button>
                        </Link>
                    </CardFooter>
                    </Card>
                </Center>
            </Box>
            <Box height='30em'>
                <Center h='100%'>
                    <Card align='center' h='100%' w='100%' backgroundColor='#64B1AF'>
                    <CardHeader w='100%'>
                        <Heading size='lg'> Join the Discord Server</Heading>
                        <Divider orientation='horizontal' pt='1em'/>
                    </CardHeader>
                    <CardBody>
                        <Center h='100%'>
                            <Link href='https://discord.com/invite/5YZUeskA7H' isExternal>
                                <Image src='https://cdn-icons-png.flaticon.com/512/2111/2111267.png' boxSize='200px' id='discordlogo'></Image>
                            </Link>
                        </Center>
                    </CardBody>
                    </Card>
                </Center>
            </Box>
        </SimpleGrid>
    );
}

export default WelcomeComponent;
