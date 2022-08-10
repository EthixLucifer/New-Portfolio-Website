import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/projects';
import P from "../../components/paragraph";

import Layout from "../../components/layout/article";

const Project = () => {
    return (
        <Layout title={"PortFolio Project"} >
            <Container>
                <Title>
                    Ethix.Live <Badge>2022</Badge>
                </Title>
                <P>
                    A portfolio website with three major components from which the first component being the landing page.
                </P>
                <P>
                    The second component comprises of multiple windows which redirect to the associated built project.
                </P>
                <P>
                    Third and the final component is a contact forum built using mailing API named EmailJs using which people can connect with me via mail and receive an autogenerated reply.
                </P>
                <ProjectImage mt={55} src="/images/firstportfolio_1.PNG" alt="portfolio First" />
                <ProjectImage mt={55} src="/images/firstportfolio_2.PNG" alt="portfolio Second" />
                <ProjectImage mt={55} src="/images/firstportfolio_3.PNG" alt="portfolio Third" />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ethixlucifer-80663.web.app/" target="_blank">
                            Prev PortFolio <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Meta>Github Repo </Meta>
                        <span>Sorry! Private Repository😅</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Tech Stack</Meta>
                        <span>React, Google Firebase, CSS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>API</Meta>
                        <Link href="https://www.emailjs.com/" target="_blank">
                            EmailJs <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>

                </List>

            </Container>
        </Layout>
    )
}

export default Project;



