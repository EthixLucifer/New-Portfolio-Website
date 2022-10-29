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
                    Imagic Art <Badge>2022</Badge>
                </Title>
                <P>
                    Ethxchain is a NFT minting and sharing platform that allows users to mint and sell NFT's across BSC Testnet, Polygon Mumbai and Goerli Testnet. When visiting the platform for the first time, ensure to connect your metamask wallet.

                </P>
                <P>
                    The project uploads JSON file of the NFT and Image using the IPFS http client Library.
                </P>

                <P>
                    Next, to buy a nft from the marketplace, firstly switch to the respected testnet via SELECT YOUR NETWORK button or manually using metamask and then click on the BUY NFT button and approve the transaction.

                </P>

                <ProjectImage mt={55} src="/images/ImagicArt.png" alt="ImagicArt" />

                <P>
                    Else, if you want to mint an NFT; head to the MINT NFT section, fill up the form details and select the network for your NFT from dropdown button, if you wanna save nft for yourself click on the MINT NFT or else if you wanna list NFT for sale, then click on the LIST NFT button. Take note that you'll be charged 0.001 token as listing fees when listing NFT on the marketplace.
                </P>
                <ProjectImage mt={55} src="/images/MintNft.png" alt="ImagicArt_2" />

                <P>
                    To view you bought and minted NFT's head to the MY NFT section, select the network you wanna view your NFT's from and wait; if your minted NFT's and they're still not showing, then try clicking on the refresh NFT button; this may most likely happen as IPFS is very slow.
                </P>
                <ProjectImage mt={55} src="/images/MyNft.png" alt="ImagicArt_3" />

                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://emagica-ethixlucifer.vercel.app/" target="_blank">
                            Imagic Art <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Github Repo</Meta>
                        <Link href="https://github.com/EthixLucifer/nftmarketplace" target="_blank">
                            ImagicArt.Github<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>IPFS HTTP Client</Meta>
                        <Link href="https://www.npmjs.com/package/ipfs-http-client" target="_blank">
                            IpfsHttpClient.NpmJS<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    

                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>Next.Js, Tailwind, NextUI, Solidity, Hardhat, Ethers.js, IPFS HTTP Client </span>
                    </ListItem>

                </List>

            </Container>
        </Layout>
    )
}

export default Project;



