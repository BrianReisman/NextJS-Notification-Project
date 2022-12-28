import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res
      .status(405)
      .json({ message: `${req.method} not supported at this time.` });
  }

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
