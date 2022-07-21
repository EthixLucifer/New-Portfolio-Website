import NextLink from 'next/link';
import { Heading, Box, Link, Image, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => (
    <Box mt={50}>
        <NextLink href="/projects">
            <Link>
                Projects
            </Link>
        </NextLink>
        <span>
            &nbsp;
            <ChevronRightIcon />
            &nbsp;
        </span>
        <Heading display={'inline-block'} as="h3"
            fontSize={20}
            mb={4}
        >
            {children}
        </Heading>
    </Box>
)

export const ProjectImage = ({ src, alt }) => (
    <Image borderRadius={"sm"}
        w="full"
        src={src}
        alt={alt}
        mb={4}
        mt={4}
    />

)

export const Meta = ({ children }) => (
    <Badge colorScheme={"purple"}
        mr={2}
    >
        {children}
    </Badge>
)