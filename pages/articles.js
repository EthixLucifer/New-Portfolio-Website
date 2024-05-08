import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Layout from "../components/layout/article"
import Section from "../components/section"
import { GridItem } from "../components/grid-item"


// import thumbEthxChain from "../public/images/thumbEthxChain.PNG"

const Articles = () => {
    <Layout title="Articles" >


        <Container >

            <Heading as="h3" fontSize="20" mb={"31"}>
                Latest Articles
            </Heading>

        </Container>
    </Layout>
}

export default Articles;