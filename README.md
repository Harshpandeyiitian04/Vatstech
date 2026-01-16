
# Vatstech

Vatstech is a modern web application designed to provide users with insights, services, and seamless interactions related to VAT and business technology. Built using Next.js, React, and Prisma, the app offers a robust platform for users to explore services, read insightful content, and manage orders securely.

## Live URL

Access the live application at: [vatstech.vercel.app](https://vatstech.vercel.app/)

---

## Features

- **Home Page:** Introduction to Vatstech and its offerings.
- **About Page:** Information about the company and its mission.
- **Contact Page:** Users can reach out for inquiries or support.
- **Insight Page:** Provides valuable articles and insights related to VAT and technology.
- **Services Page:** Explore a variety of services, each with detailed descriptions and dynamic routing for service details.
- **Authentication:** Secure login, signup, and logout functionality.
- **Order Creation:** Users can create orders for services.
- **Payment Success:** Confirmation page after successful payments.
- **API Endpoints:** Includes endpoints for order creation, authentication, and webhook handling.
- **Chat Widget:** Real-time chat support for user queries.
- **Modern UI:** Built with reusable components for buttons, cards, sheets, and more.

## Tech Stack

- **Next.js:** Server-side rendering and routing.
- **React:** Component-based UI development.
- **Prisma:** Database ORM for managing data and migrations.
- **PostCSS:** CSS processing for modern styling.
- **ESLint:** Code linting for quality and consistency.
- **TypeScript:** Type safety across the codebase.

## Folder Structure

- `app/` - Main application pages and API routes.
- `components/` - Reusable UI and functional components.
- `lib/` - Utility functions and content management.
- `prisma/` - Database schema and migrations.
- `public/` - Static files and assets.

## Getting Started

1. **Clone the repository:**
	```powershell
	git clone https://github.com/Harshpandeyiitian04/Vatstech.git
	cd Vatstech
	```
2. **Install dependencies:**
	```powershell
	npm install
	```
3. **Set up environment variables:**
	- Configure your database and other secrets in `.env`.
4. **Run the development server:**
	```powershell
	npm run dev
	```
5. **Access locally:**
	- Visit `http://localhost:3000` in your browser.

## API Routes

- `POST /api/signup` — create a new user (expects `name`, `email`, `phone`, `password`). Returns 201 on success. Returns 409 if the email already exists.
- `POST /api/login` — authenticate a user (expects `email`, `password`). On success sets an httpOnly `token` cookie and returns the user object.
- `POST /api/logout` — clears the `token` cookie.
- `POST /api/create-order` — create a new order for a service.
- `POST /api/webhook` — handle payment or external service webhooks.

## Deployment

1. Push your repository to GitHub.
2. Create a Vercel project and connect to the repository.
3. Add Environment Variables in Vercel (Project Settings → Environment Variables):
	- `DATABASE_URL` — your production Postgres connection string (do NOT use localhost).
	- `JWT_SECRET` — your production JWT secret.
4. Build command recommendation:
	```powershell
	npx prisma generate && npm run build
	```
	Or ensure `postinstall` runs `prisma generate` (the project already contains a `postinstall` script).
5. Deploy. If the build fails due to database connectivity, ensure `DATABASE_URL` is set and reachable from Vercel.

## Security Notes

- JWT tokens are stored in httpOnly cookies for security.
- Keep secrets safe and rotate periodically.
- Use HTTPS and secure cookie flags in production.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and new features.

## License

This project is licensed under the MIT License.

---

For more information, visit the [live site](https://vatstech.vercel.app/) or contact the team via the Contact page.
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
