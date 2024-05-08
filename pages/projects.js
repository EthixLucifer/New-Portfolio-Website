import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import thumbEthxChain from "../public/images/thumbEthxChain.PNG";
import firstportfolio_1 from "../public/images/firstportfolio_1.PNG";
import thumbImagicArt from "../public/images/thumbImagicArt.PNG";
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
                    <ProjectGridItem id="ImagicArt" title="Imagic Art"
                    thumbnail={thumbImagicArt}>
                        A Multichain NFT Marketplace that features `BSC, Goerli, and PolyGon Mumbai` Testnets
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="EthxChain" title="EthxChain"
                    thumbnail={thumbEthxChain}>
                        A decentralized Crypto transfer platform deployed on Firebase
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="Firstportfolio" title="First Portfolio Website"
                    thumbnail={firstportfolio_1}>
                        Previous Portfolio Website Built using React.Js deployed on Firebase
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Projects;