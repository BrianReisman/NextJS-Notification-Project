import React from 'react';

async function saveNotification(notification) {
  const response = await fetch('/api/notifications', {
    method: 'PUT',
    body: JSON.stringify(notification),
  });
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default function Notification({ notification }) {
  return (
    <div>
      <h2>Single Notification:</h2>
      <p>{`One of your bookmarked grants, ${notification.grantName} is due on ${
        notification.dueDate
      }! That means you still have ${'---'} day(s) lef to apply and possibly be awarded as much as ${
        notification.maxGrantAmount
      }`}</p>
      <button
        onClick={async (e) => {
          try {
            // PUT request to db
            await saveNotification(notification.id);
            // TODO update compnent/page state
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
