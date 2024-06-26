import Logo from "./logo";
import NextLink from "next/link";
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, IconButton, useColorModeValue } from "@chakra-ui/react"
import { HamburgerIcon, DragHandleIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toogle-button";


const LinkItem = ({ href, path, children }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('grey200', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link
                p={1}
                bg={active ? 'blue.50' : undefined}
                alignItems="center"
                color={active ? '#202023' : inactiveColor}
                borderRadius={inactiveColor ? 0 : 0}
                outlineColor={active ? "blue.200" : undefined}
                textUnderlineOffset={active ? -500 : -500}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff', '#1A2238')}

            style={{ backdropFilter: 'blur(5px)' }}
            zIndex={2}


            {...props}
        >
            <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
                <Flex align='center' mr={5} >

                    <Heading as='h1' size="lg" letterSpacing={'tighter'} mt={2}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems='center'
                    flexGrow={1}
                    mt={{ base: " 4", nmd: 0 }}
                >

                    <LinkItem href="/projects" path={path} >
                        Projects
                    </LinkItem>
                    <LinkItem href="/training" path={path} >
                        Trainings
                    </LinkItem>

                    {/* <LinkItem href="/articles" path={path} >
                        Articles
                    </LinkItem> */}
                </Stack>


                <Box flex={1}
                    align='right'
                >
                    <ThemeToggleButton />




                    <Box ml={2} display={{ base: "inline-block", md: 'none' }}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />

                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>
                                        About
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/projects" passHref>
                                    <MenuItem as={Link}>
                                        Projects
                                    </MenuItem>
                                </NextLink>
                                <NextLink href="/training" passHref>
                                    <MenuItem as={Link}>
                                        Trainings
                                    </MenuItem>
                                </NextLink>
                                {/* <NextLink href="/articles" passHref>
                                    <MenuItem as={Link}>
                                        Articles
                                    </MenuItem>
                                </NextLink> */}

                                <MenuItem as={Link} href="https://github.com/EthixLucifer/New-Portfolio-Website">
                                    View This SourceCode
                                </MenuItem>

                            </MenuList>

                        </Menu>

                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar;
