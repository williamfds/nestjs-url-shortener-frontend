# URL Shortener

A modern, responsive and bilingual (🇺🇸 English | 🇧🇷 Portuguese) URL shortening application built with Next.js 15, Chakra UI, and NestJS backend.

![Preview](public/og-image.png)

## Features

- 🔗 Shorten any URL quickly
- 🌙 Light/Dark theme toggle
- 🌍 Language switcher (English / Portuguese)
- 🧼 Clear input button
- 📋 One-click copy to clipboard
- ✅ Feedback toast notifications
- 📱 Responsive layout
- 🎨 Polished UI using Chakra UI
- 🧩 Framer Motion animations
- 🌐 SEO-optimized with Open Graph image

## Tech Stack

- Frontend: [Next.js 15](https://nextjs.org/) with App Router and Turbopack
- UI: [Chakra UI](https://chakra-ui.com/)
- State: React Context (for locale)
- Animation: [Framer Motion](https://www.framer.com/motion/)
- Icons: [React Icons](https://react-icons.github.io/react-icons/)
- Backend API: [NestJS URL Shortener](https://github.com/williamfds/nestjs-url-shortener)
- Hosting: [Vercel](https://vercel.com/) / [Render](https://render.com/)

## Environment Variables

Create a `.env` file and configure the following:

```env
NEXT_PUBLIC_API_URL=https://nestjs-url-shortener.onrender.com
```

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

## Internationalization

- Default locale: `en`
- Available locales: `en`, `pt`
- Language toggle via button in the header

## Social Preview

- `public/og-image.png` is used for Open Graph meta tags

## 📷 Screenshot

| Light Theme                  | Dark Theme                 |
| ---------------------------- | -------------------------- |
| ![Light](./public/light.png) | ![Dark](./public/dark.png) |

## License

MIT © [williamfds](https://github.com/williamfds)
