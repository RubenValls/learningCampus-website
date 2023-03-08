import React from 'react';
import { Center, Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Divider, VStack, UnorderedList, ListItem, Link} from '@chakra-ui/react';

const Workcardsback = () => {
    return (
        <VStack m='auto'>
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Center>
                    <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://storage.googleapis.com/openjobs-beta/empresa_image/cl77ke7ql000r1fktetrv8g6b.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230308%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230308T032115Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=3a236eeed762263a986444dd9dcecdde42243bb9e4de5daedbfe2b4111b2f62893b00dd91d0948afc3881cda4a445a15c26e50d425936aa4e2be31137d524cc3c2f0f7de69756354259f3282dea540164a0c594206bbc956784d5cd80b502bbc7080a0d1cad99e14359cbe4bfd7570089beb29919aa775bbb3b10800e079ab86c68f4ead6c4318fb2eb9635421d430417f6382208648c785812c7e0622fbb94410c72e2647128bbee3b1b468eb0f85c08cd5b6c0e9766b8db2b15133a9298452b01938de50c2d1ce09f1175bc29cf7592a54e65452035f7abd378ec5b19a7753d8bf020aa4657fbe9a6dad9b6cdfc5178eda4edd6ab34c7885e614c049459457'
                    alt='Sesame logo'
                    />
                </Center>
                <Stack>
                    <CardBody>
                        <Heading size='md'>.NET Junior Developer</Heading>
                        <Divider mt='0.5em'></Divider>
                        <Text py='5'>
                            What are we looking for?
                        </Text>
                        <UnorderedList alignItems='start'>
                            <ListItem>2 years experience</ListItem>
                            <ListItem> NET, ASP, Entity, jQuery, JS Stack</ListItem>
                            <ListItem>Git basics</ListItem>
                        </UnorderedList>
                        
                    </CardBody>
                    <CardFooter pt='0' mt='0'>
                        <Center w='100%'>
                            <Link href='https://jobrun.dev/empresas/barrabes/frontend-developer-react-72' isExternal>
                                <Button variant='solid' colorScheme='blue'>
                                    See Offer
                                </Button>
                            </Link>
                        </Center>
                    </CardFooter>
                </Stack>
            </Card>
        </VStack>
    );
}

export default Workcardsback;
