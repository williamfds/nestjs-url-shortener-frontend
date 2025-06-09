'use client';

import {
  Box,
  Input,
  Button,
  Text,
  Link,
  VStack,
  useClipboard,
  useToast,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { useTranslations } from '@/hooks/useTranslations';
import { CloseIcon } from '@chakra-ui/icons';

export default function Home() {
  const t = useTranslations();
  const toast = useToast();

  const [url, setUrl] = useState('');
  const [short, setShort] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { onCopy, hasCopied } = useClipboard(short);

  async function handleShorten() {
    setError('');
    let fixedUrl = url.trim();

    if (!/^https?:\/\//i.test(fixedUrl)) {
      fixedUrl = `https://${fixedUrl}`;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/shorten`, {
        url: fixedUrl,
      });
      setShort(res.data.shortUrl);

      toast({
        title: t.shortenSuccess,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (e) {
      console.error('API error:', e);
      setError(t.errorApi);
    } finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    onCopy();
    toast({
      title: t.copySuccess,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  }

  function clearInput() {
    setUrl('');
    setShort('');
    setError('');
  }

  return (
    <Box
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      rounded="2xl"
      shadow="xl"
      w="full"
      maxW="md"
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">
          {t.title}
        </Text>
        <Text fontSize="sm" color="gray.600" _dark={{ color: 'gray.300' }} textAlign="center">
          {t.subtitle}
        </Text>
        <InputGroup>
          <Input
            placeholder={t.inputPlaceholder}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            isInvalid={!!error}
            rounded="md"
            bg="white"
            _dark={{ bg: 'gray.700' }}
          />
          {url && (
            <InputRightElement>
              <IconButton
                aria-label="Clear"
                icon={<CloseIcon boxSize={2.5} />}
                size="sm"
                variant="ghost"
                onClick={clearInput}
              />
            </InputRightElement>
          )}
        </InputGroup>
        <Button
          onClick={handleShorten}
          isLoading={loading}
          isDisabled={loading || !url}
          colorScheme="blue"
          w="full"
          rounded="md"
          shadow="sm"
        >
          {t.buttonShorten}
        </Button>

        {error && (
          <Text color="red.500" textAlign="center">
            {error}
          </Text>
        )}

        {short && (
          <Box textAlign="center">
            <Text mb={2}>{t.shortenSuccess}</Text>
            <Link href={short} color="blue.500" isExternal display="block" mb={2}>
              {short}
            </Link>
            <Button variant="outline" onClick={handleCopy} w="full">
              {hasCopied ? t.copied : t.copyButton}
            </Button>
          </Box>
        )}
      </VStack>
    </Box>
  );
}
