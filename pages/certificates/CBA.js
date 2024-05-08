import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/certificates';
import P from "../../components/paragraph";

import Layout from "../../components/layout/article";
var certificateName = "Internshala Ethical Hacking Certificate";
const Project = () => {
    return (
        <Layout title={certificateName} >
            <Container>
                <Title>
                    Certified Blockchain Architect Training <Badge>2022</Badge>
                </Title>
                <ProjectImage mt={55} src="/images/certificatedir/CBA.jpg" alt="certified blockchain architect" />

                <P>
                    This blockchain architect course, helped me immensly in understanding the architecture of blockchain network.


                </P>

                <P>
                    This course helped me in taking better decesions for selecting the right blockchain platform according to the business or client needs.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Verify Certificate</Meta>
                        <Link href="https://www.credential.net/f5a06bbd-b1e1-45e5-9d9a-697d1d175d8c" target="_blank">
                            Blockchain Council <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem mt={5}>
                        <Meta>Skills Learned</Meta>
                        <P>
                            Blockchain Architecture, Blockchain Node Development, Cryptography Protocols (Symmetric & Assymetric) 
                        </P>
                    </ListItem>


                </List>

            </Container>
        </Layout>
    )
}

export default Project;



