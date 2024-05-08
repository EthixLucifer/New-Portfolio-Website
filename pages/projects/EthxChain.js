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
                    Ethxchain is a platform that allows users to send and receive ropsten ethers. When visiting the platform for the first time, ensure to connect your metamask wallet via ropsten testnet.
                    
                </P>

                <P>
                    Next, fill up the transaction form with receivers address, transfer amount. With every transaction you get to attach a gif image. So type the name of character, object or anything you want to represent the transaction with. 

                </P>

                <P>
                    At last, add the transaction message and click on send Eth button.
                </P>
                <ProjectImage mt={55} src="/images/thumbEthxChain.PNG" alt="EthxChain" />
                <ProjectImage mt={55} src="/images/Ethxchain_2.PNG" alt="EthxChainImage_2" />
                <ProjectImage mt={55} src="/images/Ethxchain_3.PNG" alt="EthxChainImage_3" />

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ethxchain.tech" target="_blank">
                            EthxChain <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github Repo</Meta>
                        <Link href="https://github.com/EthixLucifer/EthxChain" target="_blank">
                            EthxChain.Github<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>API</Meta>
                        <Link href="https://developers.giphy.com/" target="_blank">
                            Giphy Developers<ExternalLinkIcon mx="2px" />
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



