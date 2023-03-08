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
                    src='https://storage.googleapis.com/openjobs-beta/empresa_image/clb24o5qm000101zi9d0whrsj.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230308%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230308T081857Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=7c249da9772291cef1e74b481bbf087b76acef3fe9c41b1f1a7f02a82561a06dd9a9e2164eccd22b6c918e34b7534319cddf5b68a22db872497ac02680597c4b7aa6dd7a0ade46e92b2408b394869d98dc28e7e6c69f2311590c9ad690d94b7a1863492fc7ac4e3031ef444253ac4f8384bf9cfc20f69769a641c3879797e390005fc439843403eb6b48f064173d39bab93c015bd163f6279498b250301ccb951a93d2cd5cc1ee994ffc989e079a7e7b07e0a0c31bf7355e527e94c10bf5694245c10e443cd08f9a733918f1748d7f147cdbf43feeeb7dadc70b83373d386d3f267754aa7803e61081f602a60f4f319d7ac5bc84f56a333d61f608cb68f75cf7'
                    alt='Petroprix logo'
                    />
                </Center>
                <Stack>
                    <CardBody>
                        <Heading size='md'>Backend Engineer</Heading>
                        <Divider mt='0.5em'></Divider>
                        <Text py='5'>
                            What are we looking for?
                        </Text>
                        <UnorderedList alignItems='start'>
                            <ListItem>2 years experience</ListItem>
                            <ListItem>NET, C++, Java, JavaScript and C#</ListItem>
                            <ListItem>Drivers developement</ListItem>
                        </UnorderedList>
                        
                    </CardBody>
                    <CardFooter pt='0' mt='0'>
                        <Center w='100%'>
                            <Link href='https://jobrun.dev/empresas/petroprix/backend-engineer-105' isExternal>
                                <Button variant='solid' colorScheme='teal'>
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
                    src='https://storage.googleapis.com/openjobs-beta/empresa_image/cl96t7jv700011frj4rbdbtwk.jpeg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230307%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230307T155532Z&X-Goog-Expires=518401&X-Goog-SignedHeaders=host&X-Goog-Signature=34ecd4ec5d681a815982339fd3fc35211d7196fec0365969925a8de0c962b3851cd75e7c41cc3e732573f17cb5cafe02dba5d15e93018be967e8720d698a8aabc029927d496884f618421a1168457b910a4ed874dd92d89d7e4e59de38c28da24966d93b8d0fd946209738deee6630d2cf47f9e18d16a5dfb9347b59666ccf075e81303b2e316aa1557e737859123d023b17dc4a315108ed33e57e11f67efbc9924768ade23cb30048ddf5c46d8d439bf1901b8948d1dc583f1ba829a8f7beeb22ba69ba1eb8bf1d3793cbb29ea608f8108031d3fef0d21b43196cd265c5cae7fefd682403daadd64b758efb47282ab60ddfffe27cd7771d765080d2c9905958'
                    alt='Talan logo'
                    />
                </Center>
                <Stack>
                    <CardBody>
                        <Heading size='md'>Java Developer</Heading>
                        <Divider mt='0.5em'></Divider>
                        <Text py='5'>
                            What are we looking for?
                        </Text>
                        <UnorderedList alignItems='start'>
                            <ListItem>Spring Boot: Java 7/8; Spring MVC</ListItem>
                            <ListItem>Databases: SQL and NoSQL</ListItem>
                            <ListItem>Swagger desirable.</ListItem>
                        </UnorderedList>
                        
                    </CardBody>
                    <CardFooter pt='0' mt='0'>
                        <Center w='100%'>
                            <Link href='https://jobrun.dev/empresas/talan/java-developer-59' isExternal>
                                <Button variant='solid' colorScheme='teal'>
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
                    src='https://storage.googleapis.com/openjobs-beta/empresa_image/cl77jsie1000n1fkt8scleks9.jpg?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=openvitaebeta%40wired-coda-333713.iam.gserviceaccount.com%2F20230308%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20230308T025217Z&X-Goog-Expires=518400&X-Goog-SignedHeaders=host&X-Goog-Signature=37322e671fb55083033bf3d63efc486fd669f9f7c2dc85f95b712a7cfbd29f7886760785defe091ebed07aea79ce8b45424e4ef04dd85115b973756c94382e5046ecde05e852005cc5c1aec21a1680c13d2359ed3cfac8141c2656c3890087ceb31ab3b0bbb6938a38991cfc84d83e238f801f0f7e8cd0569c88548947cd1e366e867a30b347b4b25627b4e939c76f7d8b55835db447982364fde3dd5979eeb63a12bad27378e667bf6f9abb3f5cf72fb7fa8a7d7b3e4a73f085ba3b93531efcda113718a2251c2c5f4d68845839c9d3b052edcd86be1c6ce66a6d9f43f40be0382faff884dfd9cd0eeb2a39c558b76bb55f9b0c009acadbd4fab440b9a15efe'
                    alt='Backend logo'
                    />
                </Center>
                <Stack>
                    <CardBody>
                        <Heading size='md'>Backend Developer</Heading>
                        <Divider mt='0.5em'></Divider>
                        <Text py='5'>
                            What are we looking for?
                        </Text>
                        <UnorderedList alignItems='start'>
                            <ListItem>Elastic Search or Adonis a plus</ListItem>
                            <ListItem>Node, Laravel, Java, Ruby or .NET</ListItem>
                            <ListItem>CEO practices</ListItem>
                        </UnorderedList>
                        
                    </CardBody>
                    <CardFooter pt='0' mt='0'>
                        <Center w='100%'>
                            <Link href='https://jobrun.dev/empresas/openbootcamp/backend-developer-92' isExternal>
                                <Button variant='solid' colorScheme='teal'>
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
