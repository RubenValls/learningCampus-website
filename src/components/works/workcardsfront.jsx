import React from 'react';
import { Center, Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Divider, VStack, UnorderedList, ListItem, Link } from '@chakra-ui/react';

const Workcardsfront = () => {
    return (
        <VStack>
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Center>
                    <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://storage.googleapis.com/openjobs-beta/empresa_image/cl9msmxc000011gpr39iraaws.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230308%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230308T092838Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=6a4755635fcaf661481f1c3871335fd2577334ac6dce97899ada3a6e937c2309d6ecaef80919586495b2530143b160a600b8fb13bee43f8496dc424f001d3c9fdc9623acf3aa99b4b52ab6d33ddd5198ab45c701fab8f96ebc09282f8d3995f316279fcb52b0066110cbf751cd8aa7aca1bbec5c191d40f1a5c72d7a8b14e9345c7259cb0a3945abfd00ace3e4162d51eb8e0dd2b8d528fa13ece28b98034a0471e71ea239f1ad13fcc15326c24e27c507b82b951e420f1c2079b9c467e9108d38f587eadb2acb4657f03af55222223a1fc0c093273f8fb93176dc7d333ec95fe2c9ac56b20ff51aae9bb5243a39cce6e43c726d5818aaf1069df1260e8a7777'
                    alt='Barrabés logo'
                    />
                </Center>
                <Stack>
                    <CardBody>
                        <Heading size='md'>Frontend Developer React</Heading>
                        <Divider mt='0.5em'></Divider>
                        <Text py='5'>
                            What are we looking for?
                        </Text>
                        <UnorderedList alignItems='start'>
                            <ListItem>3 years experience at front-end</ListItem>
                            <ListItem>1 year with ReactJS</ListItem>
                            <ListItem>Good english level</ListItem>
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
            <Card
                direction={{ base: 'column', md: 'row' }}
                overflow='hidden'
                variant='outline'
                >
                <Center>
                    <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://storage.googleapis.com/openjobs-beta/empresa_image/cl7hvtriw00031fos51g15l6d.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230308%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230308T025625Z&X-Goog-Expires=518401&X-Goog-SignedHeaders=host&X-Goog-Signature=52cdfb9a0ddb473bdd6e0774164bbdd0bb5c920098f236721d79f25f58f1b04db960f1a72a30e6f917742e3ada4ad5bf5d2329bca66383b99fa9322fd918e5b59e02842cde6abf42f460573d2917cef07c3175aff64aba489923c633a6d56a95bb8a00f629a88b4088b292b4e28be1d7b689a400797065916933470ed97c35d89c7954a5eacf0d60090995e562be5040bbeabe839032f93cb3e55439679961cab2f3e33bb2fcf15cb4f24f82ab8e00628238dd41be1e6d083cdbe30a14704d0b3887f9394a9a1d96efa652902baf8db0d4f51a46f5330e20b5ed4023a1f252c948ec6e71eba6cddb14cf795d8ec4551b7c6a0ef8b4ffec8506f4c58726967204'
                    alt='Sesame logo'
                    />
                </Center>
                <Stack>
                    <CardBody>
                        <Heading size='md'>Vue/Ts Fronted Developer</Heading>
                        <Divider mt='0.5em'></Divider>
                        <Text py='5'>
                            What are we looking for?
                        </Text>
                        <UnorderedList alignItems='start'>
                            <ListItem>Axios experience</ListItem>
                            <ListItem>HTML5 CSS3 / SCSS Javascript</ListItem>
                            <ListItem>Good english level</ListItem>
                        </UnorderedList>
                        
                    </CardBody>
                    <CardFooter pt='0' mt='0'>
                        <Center w='100%'>
                            <Link href='https://jobrun.dev/empresas/sesame-hr/vuetypescript-fronted-developer-15' isExternal>
                                <Button variant='solid' colorScheme='blue'>
                                    See Offer
                                </Button>
                            </Link>
                        </Center>
                    </CardFooter>
                </Stack>
            </Card>
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
                            <Link href='https://jobrun.dev/empresas/proxya/desarrolladora-net-87' isExternal>
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

export default Workcardsfront;
