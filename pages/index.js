import { Container, Box, Button, Heading, Image, useColorModeValue, Link, SimpleGrid, List, Icon, ListItem } from '@chakra-ui/react';
import NextLink from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layout/article';
import { BioSection, ExperienceContainer, PositionName, ExperienceYear, BioYear, BioContainer, CompanyName } from '../components/bio';
import { GridItem } from '../components/grid-item';
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, } from 'react-icons/io';


const Page = () => {
    return (
        <Layout >




            <Container fontFamily={"Ubuntu"} >

                {/* {*pl={20}*} padding to the left side of the name */}
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.700', 'purple.900')} p={3} align="center" mt={20} mb={8} fontFamily="Cormorant SC">
                    Certified Blockchain & NFT Developer and A CyberSecurity Geek
                </Box>

                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1} >
                        <Heading as="h2" variant="page-title"
                        >
                            Rohit Jambhulkar
                        </Heading>
                        <p
                        // fontFamily="Cormorant SC" fontWeight={"bold"} fontSize={"110%"}
                        > Pen Tester, Smart Contract Developer, Tech Content Creator</p>
                    </Box>
                    <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align='center' >
                        <Image borderColor="whiteAlpha.900" borderWidth={3} borderStyle='solid' maxWidth="150px" display="inline-block" borderRadius='full' src="/images/profile-pic (1).png" alt="Ethix Jambhulkar profile Image" />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as='h3' variant='section-title'>
                        About Me
                    </Heading>
                    <Paragraph>
                        I am a Blockchain Developer and a CyberSecurity Geek. I have a passion for Blockchain and I am currently working on a project to create a decentralized application that will help people to share their thoughts and ideas.
                        {/* <NextLink href='projects/name'>
                        <Link> EthxChain</Link>
                    </NextLink> */}

                    </Paragraph>
                    <Box align='center' my={5}>
                        <NextLink href="/projects">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="cyan" align='center'>
                                Checkout Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.4}>
                    <Heading as='h3' variant='section-title'>
                        Bio
                    </Heading>
                    <BioContainer>
                        <BioYear>2002</BioYear>
                        <BioSection>
                            Born in India.
                        </BioSection>
                    </BioContainer>

                    <BioContainer>
                        <BioYear>2017-2018</BioYear>
                        <BioSection>
                            Finished Xth grade from Maharashtra SSC Board
                        </BioSection>
                    </BioContainer>
                    <BioContainer>
                        <BioYear>2018-2022</BioYear>
                        <BioSection>
                            Finished Diploma in Information Technology from &quot;Government Polytechnic Gondia&quot;
                        </BioSection>
                    </BioContainer>


                </Section>
                {/* Experience Section */}

                <Section delay={0.7}>
                    <Heading as='h3' variant='section-title'>
                        Experience
                    </Heading>


                    <ExperienceContainer>
                        <ExperienceYear>06/2021 - 11/2021</ExperienceYear>

                        <CompanyName>
                            <Link href='https://techdecodetutorials.com/author/rohit/' target='_blank'>  TechDecode Tutorials</Link>
                        </CompanyName>

                        <PositionName>
                            Technical Content Creator Intern
                        </PositionName>

                    </ExperienceContainer>
                    <ExperienceContainer>

                        <ExperienceYear>11/2021 - 03/2022</ExperienceYear>

                        <CompanyName>
                            <Link href='https://www.binarysemantics.com/' target='_blank'>  Binary Semantics Pvt Ltd</Link>
                        </CompanyName>

                        <PositionName>
                            Technical Content Writer Intern
                        </PositionName>

                    </ExperienceContainer>
                    <ExperienceContainer>

                        <ExperienceYear>04/2022 - Present</ExperienceYear>

                        <CompanyName>
                            <Link href='https://www.toshinnovations.com/' target='_blank'>  Tosh Innovations </Link>
                        </CompanyName>

                        <PositionName>
                            Blockchain Intern
                        </PositionName>

                    </ExperienceContainer>

                </Section>



                {/* <Section delay={0.9}>
                    <Heading as="h3" variant="section-title">
                        Skills
                    </Heading>


                        
                        <List mt={5}>
                            <ListItem>
                                <Heading as="h5" variant={"Skills"}>
                                    Technical Writing
                                </Heading>
                            </ListItem>
                        </List>

                    

                </Section> */}




                <Section delay={0.9}>
                    <Heading as="h3" variant="section-title">
                        Connect Via
                    </Heading>

                    <SimpleGrid columns={[2, 2, 2]} gap={6}>
                        <List mt={5}>
                            <ListItem>
                                <Link href="https://www.linkedin.com/in/ethixlucifer" target="_blank">

                                    <Button variant="ghost" colorScheme="linkedin"
                                        leftIcon={<Icon as={IoLogoLinkedin}
                                        />}>
                                        Linkedin
                                    </Button>

                                </Link>

                            </ListItem>
                        </List>


                        <List mt={5}>
                            <ListItem>
                                <Link href="https://www.github.com/in/ethixlucifer" target="_blank">

                                    <Button variant="ghost" colorScheme="red"
                                        leftIcon={<Icon as={IoLogoGithub}
                                        />}>
                                        Github
                                    </Button>

                                </Link>
                            </ListItem>
                        </List>


                        <List mt={5}>
                            <ListItem>
                                <Link href="https://www.instagram.com/ethixlucifer" target="_blank">

                                    <Button variant="ghost" colorScheme="pink"
                                        leftIcon={<Icon as={IoLogoInstagram}
                                        />}>
                                        Instagram
                                    </Button>

                                </Link>
                            </ListItem>
                        </List>



                        <List mt={5}>
                            <ListItem>
                                <Link href="https://twitter.com/Ethixlucifer" target="_blank">

                                    <Button variant="ghost" colorScheme="twitter"
                                        leftIcon={<Icon as={IoLogoTwitter}
                                        />}>
                                        Twitter
                                    </Button>

                                </Link>
                            </ListItem>
                        </List>

                    </SimpleGrid>


                </Section>

            </Container>
        </Layout>
    );
}

export default Page;