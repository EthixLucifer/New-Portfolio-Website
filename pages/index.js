import { Container, Box, Heading } from '@chakra-ui/react';

const Page = () => {
    return (

        <Container>
            {/* {*pl={20}*} padding to the left side of the name */}
            <Box borderRadius="lg" bg="red.00" p={3} align="center" mt={20} mb={8} fontStyle="Open Sans">
                Hi, I'm Blockchain Developer & a CyberSecurity Geek
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1} >
                    <Heading as="h2" variant="page-title" >
                        Rohit Jambhulkar
                    </Heading>
                    <p> Penetration Tester, Blockchain Developer, Technical Content Creator</p>
                </Box>
            </Box>
        </Container>
    );
}

export default Page;