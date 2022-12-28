import React, { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import NotificationDisplay from '../components/NotificationDisplay';
import styles from '../styles/Home.module.css';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const allNotifications = await prisma.UpcomingGrantNotification.findMany();
  return {
    props: {
      allNotifications,
    },
  };
}

export default function Notifications({ allNotifications }) {
  const [activeNotifications, setActiveNotifications] = useState([]);

  useEffect(() => {
    setActiveNotifications(allNotifications.filter((n) => !n.dismissed));
  }, []);

  const handleDismissed = (id) => {
    setActiveNotifications(activeNotifications.filter((n) => n.id !== id));
  };

  return (
    <div className={styles.page}>
      <h1>Notifications:</h1>
      <p>
        Looking for resrouces to help stand out in your grant application?
        We&apos;ve got you covered, visit up here
      </p>
      {activeNotifications.map((n) => {
        return (
          <NotificationDisplay
            key={n.id}
            notification={n}
            handleDismissed={handleDismissed}
          />
        );
      })}
    </div>
  );
}
