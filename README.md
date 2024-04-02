# About it

- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

- This project use [Prisma](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma) && [Next with Prisma](https://vercel.com/guides/nextjs-prisma-postgres)

-Use pagination from [Prisma](https://www.prisma.io/docs/orm/prisma-client/queries/pagination) && [NextJs](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

- Use [YUP](https://www.npmjs.com/package/yup)

### Run environment locally

1. Run Database

```bash
docker compose up -d
```

2. Run FrontEnd

```bash
# install node_modules
npm install

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Create copy from `.env.template`, and rename by `.env`.
4. Run the next commands

```bash

# get models from prisma
npx prisma migrate dev

# get models from prisma
npx prisma generate
```

5. Enter to [localhost:3000/api/speed](localhost:3000/api/speed)

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Prisma

```bash
npx prisma init

# get models from prisma
npx prisma migrate dev

# get models from prisma
npx prisma generate
```

### Learn More

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
