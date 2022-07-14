import { Container, Box, Button, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import Section from '../components/section';
import Paragraph from '../components/paragraph';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, ExperienceContainer, PositionName, ExperienceYear, BioYear, BioContainer, ExperienceDescription, CompanyName } from '../components/bio';


const Page = () => {
    return (

        <Container>
            {/* {*pl={20}*} padding to the left side of the name */}
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.700', 'purple.900')} p={3} align="center" mt={20} mb={8} fontStyle="Open Sans">
                Hi, I'm Blockchain Developer & a CyberSecurity Geek
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1} >
                    <Heading as="h2" variant="page-title"
                    >
                        Rohit Jambhulkar
                    </Heading>
                    <p> Pen Tester, Smart Contract Developer, Tech Content Creator/Writer</p>
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
                    <BioYear>2017/2018</BioYear>
                    <BioSection>
                        Finished Xth grade from Maharashtra SSC Board
                    </BioSection>
                </BioContainer>
                <BioContainer>
                    <BioYear>2018/2022</BioYear>
                    <BioSection>
                        Finished Diploma in Information Technology from Government Polytechnic Gondia
                    </BioSection>
                </BioContainer>


                {/* Experience Section */}
            </Section>

            <Section delay={0.7}>
                <Heading as='h3' variant='section-title'>
                    Experience
                </Heading>

                <ExperienceContainer>

                    <ExperienceYear>06/2021 - 11/2021</ExperienceYear>

                    <PositionName>
                        Technical Content Creator Intern
                        
                        <CompanyName> <a href="https://techdecodetutorials.com/author/rohit/" target="_blank"> (TechDecode Tutorials)</a>
                        </CompanyName>

                    </PositionName>

                   
                </ExperienceContainer>
            </Section>
        </Container>
    );
}

export default Page;