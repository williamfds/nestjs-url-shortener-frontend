'use client';

import { Box, Container, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { motion } from 'framer-motion';

type Props = {
  children: ReactNode;
};

const MotionBox = motion(Box);

export default function AppLayout({ children }: Props) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />

      <MotionBox
        as={Container}
        maxW="container.md"
        flex="1"
        display="flex"
        alignItems="center"
        justifyContent="center"
        py={8}
        px={4}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {children}
      </MotionBox>

      <Footer />
    </Flex>
  );
}
