import { Box, CardBody, VStack, Card, Image, Text, Divider, Center } from '@chakra-ui/react';
import React from 'react';

const FullstackComponent = () => {
    return (
        <Center>
            <Box bg='WhiteAlpha' height='100%' w='80%' borderRadius='xl' borderWidth='1px'>
                <Text fontSize='2xl' as='b'>Full-Stack</Text>
                <Divider/>
                <VStack alignContent='center' p='1em'>
                    <Card maxW='sm' p='1em' bgColor='teal'>
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
                    <Card maxW='sm' p='1em' bgColor='teal'>
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
                    <Card maxW='sm' p='1em' bgColor='teal'>
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
                    <Card maxW='sm' p='1em' bgColor='teal'>
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
                    <Card maxW='sm' p='1em' bgColor='teal'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-plain-wordmark.svg'
                            alt='java-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>JAVA</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em' bgColor='teal'>
                        <Image
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg'
                            alt='python-logo'
                            borderRadius='sm'
                            h='5em'
                        />
                        <CardBody pb='0'>
                            <Text fontSize='sm' as='b'>PY</Text>
                        </CardBody>
                    </Card>
                    <Card maxW='sm' p='1em' bgColor='teal'>
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
                </VStack>
            </Box>
        </Center>
    );
}

export default FullstackComponent;
