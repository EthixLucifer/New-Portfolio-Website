import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import fonts from "../lib/theme";
import theme from "../lib/theme";
const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            
            <Layout router={router}>
                <Component {...pageProps} key={router.route} />
            </Layout>

        </ChakraProvider>
    )
}

export default Website;

