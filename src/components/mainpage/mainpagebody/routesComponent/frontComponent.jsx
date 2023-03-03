import { Box, CardBody, VStack, Card, Image, Text, Divider, Center } from '@chakra-ui/react';
import React from 'react';

const FrontComponent = () => {
    return (
        <Center>
            <Box bg='teal' height='100%' w='80%' borderRadius='xl' borderWidth='1px'>
                <Text fontSize='2xl' as='b'>Front-End</Text>
                <Divider/>
                <VStack alignContent='center' p='1em'>
                    <Card maxW='sm' p='1em'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                            alt='html-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>HTML</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                            alt='css3-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>CSS3</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                            alt='js-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>JS</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                            alt='git-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>GIT</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                            alt='react-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>REACT</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                            alt='ts-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>TS</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
                            alt='angular-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>ANG</Text>
                        </CardBody>
                    </Card>
                </VStack>
            </Box>
        </Center>
    );
}

export default FrontComponent;
