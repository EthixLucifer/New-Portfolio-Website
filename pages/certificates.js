import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';
import Layout from '../components/layout/article';
import thumbCBA from "../public/images/certificatedir/CBA.jpg";
import thumbCISSP from "../public/images/certificatedir/CISSP.jpg";
import thumbSmartContracts from "../public/images/certificatedir/courseraSmartContracts.jpg";
import thumbEthicalHacking from "../public/images/certificatedir/Ethicalhacking.jpg";


const Certificates = () => {
    return (
        <Layout>
            <Container>

                <Heading as='h3' fontSize={20} mb={4}>
                    Certificates
                </Heading>
                <SimpleGrid columns={[1]} gap={6}>
                    {/* <SimpleGrid columns={[1,1,2]} gap={6}> */}
                    <Section>
                        <ProjectGridItem id="EthxChain" title="Blockchain Council Certified Blockchain Architect Certificate"
                            thumbnail={thumbCBA}>
                            A decentralized Crypto transfer platform deployed on Firebase
                        </ProjectGridItem>
                    </Section>
                    <Section>
                        <ProjectGridItem id="Firstportffolio" title="Internshala Ethical Hacking Certificate"
                            thumbnail={thumbEthicalHacking}>
                        </ProjectGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Certificates;