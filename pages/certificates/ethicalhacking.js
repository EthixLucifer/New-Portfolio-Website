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
                    Ethical Hacking Training <Badge>2020</Badge>
                </Title>
                <ProjectImage mt={55} src="/images/certificatedir/Ethicalhacking.jpg" alt="ethicalHackingCertificate" />

                <P>
                    This Ethical Training helped me in performing better vulnerability analysis, and professional documentation of the found bugs
                </P>

                <P>
                    Also, through this training i learned to make better use of tools like Burp, hydra and wireshark.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Verify Certificate</Meta>
                        <Link href="https://trainings.internshala.com/view_certificate/30F3F83F-1B1B-865B-00A3-2D00026FDBEA/BE225C4B-F863-5C0B-B05B-A6BC2F3A3B2B/" target="_blank">
                            Internshala Trainings <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem mt={5}>
                        <Meta>Skills Learned</Meta>
                        <P>
                           VAPT Documentation, XSS & CXSS, Phishing, Networking 
                        </P>
                    </ListItem>

                </List>

            </Container>
        </Layout>
    )
}

export default Project;



