'use client';

import { Flex, Text, Button, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { useLocale } from '@/contexts/LocaleContext';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function Header() {
  const { locale, setLocale } = useLocale();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      justify="space-between"
      align="center"
      p={4}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottom="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Text fontSize="xl" fontWeight="bold">
        URL Shortener
      </Text>

      <Flex align="center" gap={2}>
        <Button size="sm" onClick={() => setLocale(locale === 'pt' ? 'en' : 'pt')}>
          {locale === 'pt' ? '🇺🇸 English' : '🇧🇷 Português'}
        </Button>
        <IconButton
          size="sm"
          aria-label="Toggle theme"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="outline"
        />
      </Flex>
    </Flex>
  );
}
