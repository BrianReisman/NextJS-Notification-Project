Built with NextJS and uses a SQLite db with Prisma for an ORM

### instructions

- [ ] npx prisma migrate dev

### 👉👉👉👉TODO:

- [ ] instructions to run with Prisma locally
- [ ] seed Prisma without sharing dev.db
- [ ] if point 👆 remove /gitignore dev.db
- [ ] momentJS for calc today-dueDate in notification message `${}`
- [ ] remove styled-components, used module.css instead
- [ ] fix deloy issue to Vercel
- [ ] spell check.
- [ ] Check for comments or placeholder
- [ ] fix this .md

### Challenges I faced

1. styled-components + NextJS
2. variable Naming clashing/overlap
3. seeding Prisma

### Possible Improvements or Additional Features:

1. snooze functionality
2. click on notification to route to grant/application page
3. Some UI confirmation of successful dismissal.Perhaps toast to confirm
   "dismissed successfully"
   1. with option to undo if selected by mistake
4. mobile/breakpoints
5. confirmation before dismissing. Are you sure? prompt, would you rather
   snooze? You stil have ${days} days left!
6. Make Grant Deadline Upcoming dynamic, based on notification metadata. Expired
   notifications. Grant awarded. Change icon accordingly.

---

TODO:

- [ ] if no notifiations show button to return to /
- [ ] home page icon color diff if no notifications

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

You can start editing the page by modifying `pages/index.js`. The page
auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

This project uses
[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to
automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.
