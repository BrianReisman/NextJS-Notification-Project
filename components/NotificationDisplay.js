import React from 'react';
import styles from '../styles/NotificationDisplay.module.css';
import moment from 'moment';

import { FaInfo } from 'react-icons/fa';

async function dismissNotification(id) {
  const response = await fetch('/api/notifications', {
    method: 'PUT',
    body: JSON.stringify(id),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function NotificationDisplay({
  notification,
  handleDismissed,
  today,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.iconWrapper}>
        <FaInfo />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.messageHeading}>Grant Deadline Upcoming</p>
        <p className={styles.message}>{`You bookmarked the, ${
          notification.grantName
        } grant which is due on ${moment(notification.dueDate).format(
          'L'
        )}! You still have ${moment(notification.dueDate).diff(
          moment(),
          'days'
        )} day(s) lef to apply and possibly be awarded as much as $${
          notification.maxGrantAmount
        }`}</p>
      </div>
      <button
        className={styles.button}
        onClick={async (e) => {
          try {
            // PUT request to db
            await dismissNotification(notification.id);
            // update page state
            handleDismissed(notification.id);
          } catch (err) {
            console.error(err);
          }
        }}
      >
        dismiss
      </button>
    </div>
  );
}
