import Head from 'next/head'
import Navbar from "../navbar.js"
import { Box, Container } from '@chakra-ui/react'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8} >
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title> Ethix Jambhulkar Homepage</title>
            </Head>
            <Navbar path={router.asPath} />

            {/* Determining the size of Container */}
            <Container maxW="container.lg" pt={4}  >
                {children}
            </Container>
        </Box>

    )
}

export default Main