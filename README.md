Built with NextJS and uses a SQLite db with Prisma for an ORM

**_Instructions_**

- [ ] run: `npm run prisma`
- [ ] In a new terminal run: `npm run dev`
- [ ] visit: http://localhost:3000

**_Possible Improvements or Additional Features:_**

1. snooze functionality
2. click on notification to route to grant/application page
3. Some UI confirmation of successful dismissal.Perhaps toast to confirm
   "dismissed successfully"
   1. with option to undo if selected by mistake
4. mobile/breakpoints
5. confirmation before dismissing. Are you sure? prompt, would you rather
   snooze? You stil have ${days} days left!
6. Make Grant Deadline Upcoming notification dynamic, based on how far out.
   if(dueDate < 15 days from today){show}
7. if no notifiations left, show button to return to /
8. home page icon color diff if notifications vs. no notifications
9. fix deloy issue to Vercel
