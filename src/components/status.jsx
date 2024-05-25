import React, { useState, useEffect } from 'react';

function Status() {
  const [onlineStatus, setOnlineStatus] = useState('Loading...');

  useEffect(() => {
    fetch('https://api.lanyard.rest/v1/users/841368898146402355')
      .then(response => response.json())
      .then(data => {
        const isOnline = data.discord_status === 'online';
        setOnlineStatus(isOnline ? 'Online' : 'Offline');
      })
      .catch(error => {
        console.error('Error fetching online status:', error);
        setOnlineStatus('Error');
      });
  }, []);

  return (
    <div>
      <p>{onlineStatus}</p>
    </div>
  );
}

export default Status;
