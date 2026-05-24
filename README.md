# Dra Ailen Beget Dermatología & Estética

Web estática para Dra Ailen Beget Dermatología & Estética, construida con Astro + React y lista para desplegar en Netlify.

Usa pnpm 11 mediante Corepack.

## Scripts

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Variables públicas

Crear un archivo `.env` local o configurar estas variables en Netlify:

```bash
PUBLIC_GOOGLE_MAPS_EMBED_URL="https://www.google.com/maps/embed?pb=..."
PUBLIC_GOOGLE_REVIEWS_URL="https://g.page/r/..."
PUBLIC_WHATSAPP_URL="https://api.whatsapp.com/send/?phone=541132079251&text&type=phone_number&app_absent=0&utm_source=ig"
PUBLIC_INSTAGRAM_URL="https://www.instagram.com/dra.ailenbeget/"
PUBLIC_CONTACT_EMAIL="turnos@ailenbeget.com"
```

Si una variable no existe, la web usa placeholders seguros.

## Contenido editable

- Tratamientos: `src/data/treatments.ts`
- Reseñas: `src/data/reviews.ts`
- Preguntas frecuentes: `src/data/faqs.ts`
- Datos de contacto y enlaces: `src/config/site.ts`

## Deploy en Netlify

1. Conectar este repositorio en Netlify.
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. Cargar las variables públicas anteriores desde Site configuration > Environment variables.
