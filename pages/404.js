import NextLink from 'next/link';
import { Box, Container, Text, Img,  Button } from '@chakra-ui/react';

const NotFound = () => {
    return (
        <Container marginTop={"5em"}>
            <Text fontFamily={"Permanent Marker"} fontWeight={'light'}
                align="center"
            >
               Sorry! The Page you are looking for does not exist Yet.
            </Text>


            <Box my={6} align="center">
                <Box paddingLeft={37}>
                    <Img
                        objectFit='cover'
                        src="/images/404.png" alt="404" />
                </Box>
                <NextLink href="/">
                    <Button
                        mt={6}
                        
                        colorScheme="telegram"
                        
                    >
                        Back to Home
                    </Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound;