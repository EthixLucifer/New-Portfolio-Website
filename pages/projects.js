import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import thumbEthxChain from "../public/images/thumbEthxChain.png";
import Layout from '../components/layout/article';

const Projects = () => {
    return (
        <Layout>
        <Container>

            <Heading as='h3' fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1]} gap={6}>
            {/* <SimpleGrid columns={[1,1,2]} gap={6}> */}
                <Section>
                    <ProjectGridItem id="EthxChain" title="EthxChain"
                    thumbnail={thumbEthxChain}>
                        EthxChain is a decentralized Crypto transfer platform where users can attach their transactions with GiF images, stored on Ethereum blockchain.
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="EthxChain" title="EthxChain"
                    thumbnail={thumbEthxChain}>
                        EthxChain is a decentralized Crypto transfer platform where users can attach their transactions with GiF images, stored on Ethereum blockchain.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects;