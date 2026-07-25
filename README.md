# Perlina By L — Site vitrine (Next.js)

Site vitrine de l’institut de beauté **Perlina By L** (La Grande-Motte).

## Développement local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Variables d’environnement

Copier `.env.example` vers `.env.local` :

- `NEXT_PUBLIC_SITE_URL` — URL publique (SEO / sitemap)
- `NEXT_PUBLIC_CONTACT_EMAIL` — email de l’institut (formulaires via mailto)

## Déploiement

```bash
vercel --prod
```

## Structure

- `app/` — pages App Router
- `components/` — Header, Footer, Silhouette, formulaires
- `public/images/` — photos institut & INDIBA®

## Suite prévue

Réservation temps réel + paiement Stripe + rappels SMS.
