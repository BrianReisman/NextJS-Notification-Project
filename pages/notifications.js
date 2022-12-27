import React from 'react';
import { PrismaClient } from '@prisma/client';
import Notification from '../components/notification';
import { useState } from 'react';
const prisma = new PrismaClient();

export async function getServerSideProps() {
  const notifications = await prisma.UpcomingGrantNotification.findMany();
  return {
    props: {
      notifications,
    },
  };
}

export default function Notifications({ notifications }) {
  const [notificationsASDF, setNotifications] = useState(notifications);
  const filteredNotficiations = notificationsASDF.filter((note) => {
    return !note.dismissed;
  });
  return (
    <div>
      <h1>Notifications:</h1>
      <p>
        Looking for resrouces to help stand out in your grant application? We've
        got you covered, visit up here
      </p>
      {filteredNotficiations.map((note) => {
        return <Notification key={note.id} notification={note} />;
      })}
    </div>
  );
}
