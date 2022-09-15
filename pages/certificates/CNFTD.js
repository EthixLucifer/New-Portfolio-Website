import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/certificates';
import P from "../../components/paragraph";

import Layout from "../../components/layout/article";
var certificateName = "Certified NFT Developer";
const Project = () => {
    return (
        <Layout title={certificateName} >
            <Container>
                <Title>
                    NFT Developer Training <Badge>2022</Badge>
                </Title>
                <ProjectImage mt={55} src="/images/certificatedir/CNFTD.jpg" alt="certified nft developer certificate" />

                <P>
                    This NFT Developer training, assisted me in becoming a better NFT developer.


                </P>

                <P>
                    Through this training, i was able to understand ERC-1155 and ERC-721 token standards in more detail. Also, i was able to understand the working of Inter-Planetary-File-System for building a NFT marketplace or Collection.
                </P>

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Verify Certificate</Meta>
                        <Link href="https://www.credential.net/3d0baa8c-55a1-4c99-8f39-762a562b0f54#gs.bvx7q9" target="_blank">
                            Blockchain Council <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem mt={5}>
                        <Meta>Skills Learned</Meta>
                        <P>
                            ERC-721, ERC-1155
                        </P>
                    </ListItem>


                </List>

            </Container>
        </Layout>
    )
}

export default Project;



