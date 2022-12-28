import { PrismaClient } from '@prisma/client';

// improvement, use a single instance => singleton pattern
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res
      .status(405)
      .json({ message: `${req.method} not supported at this time.` });
  }

  // because sending in with Fetch
  const id = JSON.parse(req.body);

  const updatedNotification = await prisma.upcomingGrantNotification.update({
    where: {
      id,
    },
    data: {
      dismissed: true,
    },
  });

  res.status(200).json(updatedNotification);
}
