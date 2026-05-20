# Vercel Deployment

## Environment Variables (set in Vercel dashboard)

| Variable | Value |
|----------|-------|
| MEDUSA_BACKEND_URL | http://5.182.204.216:9000 |
| NEXT_PUBLIC_MEDUSA_BACKEND_URL | http://5.182.204.216:9000 |
| NEXT_PUBLIC_BASE_URL | https://YOUR-VERCEL-DOMAIN.vercel.app |
| NEXT_PUBLIC_DEFAULT_REGION | de |
| REVALIDATE_SECRET | supersecret |
| NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY | (get from Medusa admin at http://5.182.204.216/app) |

## Deploy Steps
1. Push this repo to GitHub
2. Import in Vercel: https://vercel.com/new
3. Set all environment variables above
4. Deploy

## Local Development
```bash
npm install --legacy-peer-deps
npm run dev
# Opens at http://localhost:8000
```
