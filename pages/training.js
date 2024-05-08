import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react';
import Section from '../components/section';
import { ProjectGridItem, CertificateGridItem } from '../components/grid-item';
import Layout from '../components/layout/article';
import thumbCBA from "../public/images/certificatedir/CBA.jpg";
import thumbNFTDeveloper from "../public/images/certificatedir/CNFTD.jpg";
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
                        <CertificateGridItem id="CNFTD" title="Blockchain Council Certified NFT Developer Training"
                            thumbnail={thumbNFTDeveloper}>
                        </CertificateGridItem>
                    </Section>
                    <Section>
                        <CertificateGridItem id="CBA" title="Blockchain Council Certified Blockchain Architect Training"
                            thumbnail={thumbCBA}>
                        </CertificateGridItem>
                    </Section>
                    <Section>
                        <CertificateGridItem id="ethicalhacking" title="Internshala Ethical Hacking Training"
                            thumbnail={thumbEthicalHacking}>
                        </CertificateGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Certificates;