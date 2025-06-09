import en from '../public/locales/en.json';
import pt from '../public/locales/pt.json';

type Messages = typeof en;

export function getMessages(locale: 'pt' | 'en'): Messages {
  return locale === 'pt' ? pt : en;
}
