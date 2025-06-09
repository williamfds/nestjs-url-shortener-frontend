'use client';

import { useMemo } from 'react';
import { useLocale } from '@/contexts/LocaleContext';
import { getMessages } from '@/lib/getMessages';

export function useTranslations() {
  const { locale } = useLocale();

  const messages = useMemo(() => getMessages(locale), [locale]);

  return messages;
}
