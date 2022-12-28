const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const seed1 = await prisma.UpcomingGrantNotification.create({
    data: {
      grantName: "Governor's Arts Award for Arts",
      dueDate: '2023-02-11T22:17:23-00:00',
      maxGrantAmount: 15000,
      dismissed: false,
    },
  });
  const seed2 = await prisma.UpcomingGrantNotification.create({
    data: {
      grantName: 'Our Town',
      dueDate: '2023-02-17T22:17:23-00:00',
      maxGrantAmount: 3500,
      dismissed: false,
    },
  });
  const seed3 = await prisma.UpcomingGrantNotification.create({
    data: {
      grantName: 'Test from seed',
      dueDate: '2023-02-18T22:17:23-00:00',
      maxGrantAmount: 125000,
      dismissed: false,
    },
  });
  const seed4 = await prisma.UpcomingGrantNotification.create({
    data: {
      grantName: 'Test from seed',
      dueDate: '2023-02-23T22:17:23-00:00',
      maxGrantAmount: 4500,
      dismissed: false,
    },
  });
  const seed5 = await prisma.UpcomingGrantNotification.create({
    data: {
      grantName: 'Test from seed',
      dueDate: '2023-02-25T22:17:23-00:00',
      maxGrantAmount: 19500,
      dismissed: false,
    },
  });
  const seed6 = await prisma.UpcomingGrantNotification.create({
    data: {
      grantName: 'seed6 should never be seen dismissed:true',
      dueDate: '2023-02-25T22:17:23-00:00',
      maxGrantAmount: 99,
      dismissed: true,
    },
  });

  console.log({ seed1, seed2, seed3, seed4, seed5 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
