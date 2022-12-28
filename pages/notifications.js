import React, { useState, useEffect } from 'react';
import { PrismaClient } from '@prisma/client';
import NotificationDisplay from '../components/NotificationDisplay';
import styles from '../styles/NotificationDisplay.module.css';
import Link from 'next/link';

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
  console.log({ activeNotifications });

  useEffect(() => {
    setActiveNotifications(allNotifications.filter((n) => !n.dismissed));
  }, [allNotifications]);

  const handleDismissed = (id) => {
    setActiveNotifications(activeNotifications.filter((n) => n.id !== id));
  };

  return (
    <div className={styles.page}>
      <h1>Notifications:</h1>
      <p>
        Looking for resrouces to help stand out in your grant application?
        We&apos;ve got you covered, visit us{' '}
        <Link
          className={styles.link}
          href="https://www.resilia.com/blog/resilia-kicks-off-program-to-help-nonprofit-grantees-prepare-for-2023"
        >
          here.
        </Link>
      </p>
      {activeNotifications.length ? (
        activeNotifications.map((n) => {
          return (
            <NotificationDisplay
              key={n.id}
              notification={n}
              handleDismissed={handleDismissed}
            />
          );
        })
      ) : (
        <div>
          You&apos;re all caught up! No more notifications to be viewed at this
          time
        </div>
      )}
    </div>
  );
}
