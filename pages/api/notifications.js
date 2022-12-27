// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient(); // not single instance

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    // TODO `${} method not allowed`
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // TODO rename regarding id
  const notificationData = JSON.parse(req.body); // because sending in with Fetch
  //TODO rename "savedNotification"
  // update an existing database record
  const savedNotification = await prisma.upcomingGrantNotification.update({
    where: {
      id: notificationData,
    },
    data: {
      dismissed: true,
    },
  });

  // res.status(200).json();// TODO include status code
  res.json(savedNotification);
}
