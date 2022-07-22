import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/projects';
import P from "../../components/paragraph";

import Layout from "../../components/layout/article";

const Project = () => {
    return (
        <Layout title={"EthxChain"} >
            <Container>
                <Title>
                    EthxChain <Badge>2022</Badge>
                </Title>
                <P>
                    A decentralized Dapp deployed on Ropsten testnet of the Ethereum blockchain, where senders can attach different Gif images to the transaction and store them on the blockchain.
                </P>
                <ProjectImage mt={55} src="/images/thumbEthxChain.PNG" alt="EthxChain" />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ethxchain.tech" target="_blank">
                            EthxChain <ExternalLinkIcon mx="2px"/>
                            </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>React, Tailwind, Solidity, Hardhat</span>
                    </ListItem>

                </List>
                
            </Container>
        </Layout>
    )
}

export default Project;



