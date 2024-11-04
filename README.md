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

- https://nextjs.org/docs/app/building-your-application/testing/jest
- https://dev.to/steveruizok/jest-and-esm-cannot-use-import-statement-outside-a-module-4mmj
- for Shadcn components that started with '@/...' I added the following to jest.config.ts
  `moduleNameMapper: {
  "^@/(.\*)$": "<rootDir>/$1", // Alias for resolving modules
},`

-this line was giving the error: SyntaxError: Cannot use import statement outside a module
import { useSession } from "next-auth/react";

fixed by adding to top of test file:
`jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({
    session: null,
    loading: false,
    status: "unauthenticated",
  })),
}));`

babel.config.js
`
module.exports = {
   presets: ["next/babel"],
};`

- babel.config.js messes up prod but I need it for testing so removing that file from repo
- https://stackoverflow.com/questions/57025753/how-to-set-initial-state-for-usestate-hook-in-jest-and-enzyme (mocking useState)
- screen.debug();
- logRoles(view.container) // where view is the rendered Component being tested
- Testing Playground Chrome extension
- https://www.youtube.com/watch?v=Z2lz6W12BCQ (I removed instrumentation setting)
