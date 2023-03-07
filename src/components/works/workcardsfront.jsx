import React from 'react';
import { Center, Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Divider, VStack } from '@chakra-ui/react';

const Workcardsfront = () => {
    return (
        <VStack>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>FRONT</Heading>
                        <Divider mt='0.5em'></Divider>
                        <Text py='5'>
                            FRONT
                        </Text>
                    </CardBody>

                    <CardFooter pt='0' mt='0'>
                        <Center w='100%'>
                            <Button variant='solid' colorScheme='blue'>
                                FRONT
                            </Button>
                        </Center>
                    </CardFooter>
                </Stack>
            </Card>
        </VStack>
    );
}

export default Workcardsfront;
