'use client';

import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box
      as="footer"
      bg="whiteAlpha.800"
      borderTop="1px solid"
      borderColor="gray.200"
      backdropFilter="blur(4px)"
      py={4}
      px={6}
    >
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap={2}
        color="gray.600"
        fontSize="sm"
      >
        <Text>© {new Date().getFullYear()} williamfds. All rights reserved.</Text>
        <Link href="https://github.com/williamfds" isExternal aria-label="GitHub">
          <Icon as={FaGithub} boxSize={5} _hover={{ color: 'gray.800' }} />
        </Link>
      </Flex>
    </Box>
  );
}
