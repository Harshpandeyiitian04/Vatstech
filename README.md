# Vatstech

> A simple, modern web platform with user accounts, secure authentication, and an AI demo chatbot.

This README explains how to run, test, and deploy the Vatstech app in clear, simple steps. It is written for Harsh Pandey and anyone who wants to get the project running quickly.

---

## Features
- User signup and login with password hashing (bcrypt).
- Secure server-side JWT stored in an httpOnly cookie for authentication.
- API routes for `signup`, `login`, and `logout`.
- Floating AI chat widget (client-side demo) on the home page.
- Built with Next.js (App Router) and Prisma for database access.

## Tech stack
- Next.js 16+ (React 19)
- Prisma 7 (Postgres adapter)
- PostgreSQL (any hosted instance or Vercel Postgres)
- bcryptjs for password hashing
- jsonwebtoken for JWT signing
- Axios for client HTTP requests
- Tailwind CSS for UI (via project styles)

---

## Quick setup (development)
The steps below assume you are on Windows PowerShell and have Node.js and npm installed.

1. Clone the repo and enter the folder

```powershell
git clone https://github.com/Harshpandeyiitian04/Vatstech.git
cd Vatstech
```

2. Install dependencies

```powershell
npm install
```

3. Create a `.env` file in the project root with the required values (do NOT commit this file):

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
JWT_SECRET="a-very-strong-secret-here"
NODE_ENV=development
```

Notes:
- Use a hosted Postgres database (Supabase, Railway, Vercel Postgres, etc.). Do not set `DATABASE_URL` to `127.0.0.1` when deploying to Vercel.
- Keep `JWT_SECRET` secure and different for each environment.

4. Generate Prisma client and apply schema to your local DB

If you want to create migrations and apply them (recommended for development):

```powershell
npx prisma migrate dev --name init
npx prisma generate
```

If you prefer to push the Prisma schema to the database without migrations (safe for quick testing):

```powershell
npx prisma db push
npx prisma generate
```

5. Run the dev server

```powershell
npm run dev
```

Open http://localhost:3000 in your browser.

---

## API routes
- `POST /api/signup` — create a new user (expects `name`, `email`, `phone`, `password`). Returns 201 on success. Returns 409 if the email already exists.
- `POST /api/login` — authenticate a user (expects `email`, `password`). On success sets an httpOnly `token` cookie and returns the user object.
- `POST /api/logout` — clears the `token` cookie.
- (Optional) Add a server `POST /api/chat` to proxy AI requests securely if you connect the chat to a real AI provider.

---

## Deployment to Vercel (recommended)
1. Push your repository to GitHub.
2. Create a Vercel project and connect to the repository.
3. Add Environment Variables in Vercel (Project Settings → Environment Variables):

- `DATABASE_URL` — your production Postgres connection string (do NOT use localhost).
- `JWT_SECRET` — your production JWT secret.

4. Build command recommendation (make sure Prisma client is generated during build):

Set the Build Command to:

```
npx prisma generate && npm run build
```

Or ensure `postinstall` runs `prisma generate` (the project already contains a `postinstall` script which runs `prisma generate`).

5. Deploy. If the build fails complaining about database connectivity during build, make sure `DATABASE_URL` is set and reachable from Vercel or avoid calling DB at build time.

---

## Common problems & fixes
- Error: `P1001 Can't reach database server at 127.0.0.1:5432` — your `DATABASE_URL` is pointing to localhost. On Vercel you must use a hosted DB URL. Update the environment variable.
- Error: `Module '@prisma/client' has no exported member 'PrismaClient'` during build — run `prisma generate` during build (use `postinstall` or the explicit build command above).
- If signup returns 409: this means the email already exists. The app handles this by redirecting to login.

---

## Security notes
- The app stores JWT tokens in an httpOnly cookie set by the server (safer than localStorage for tokens).
- Keep `JWT_SECRET` safe and rotate periodically.
- Use HTTPS and `secure` cookie flag in production.

---

## How to extend
- Connect the Chat widget to a real AI provider: add a server-side API route that proxies requests to OpenAI/Azure and returns responses to the client.
- Add refresh tokens or session tables for advanced session management.

---

## Contributing & contact
If you (Harsh) or anyone else want to contribute, open a PR with a clear description. For questions reach out to Harsh Pandey.

---

Thank you for building Vatstech — good luck! If you want, I can also:
- Add an example `.env.example` file (without secrets)
- Add a guide that shows how to create a free Supabase database and set `DATABASE_URL` for Vercel
- Wire the Chat widget to an AI provider and add server proxy route
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
