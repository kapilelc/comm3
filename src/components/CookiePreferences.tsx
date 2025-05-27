import React from 'react';

export const CookiePreferences: React.FC = () => {
  const setCookie = (name: string, value: string) => {
    document.cookie = `${name}=${value};path=/`;
  };

  const clearCookies = () => {
    document.cookie.split(';').forEach((c) => {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });
  };

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginTop: '20px' }}>
      <h4>Cookie Preferences</h4>
      <button onClick={() => setCookie('allCookiesAccepted', 'true')}>Accept All Cookies</button>
      <button onClick={clearCookies} style={{ marginLeft: '10px' }}>Remove All Cookies</button>
    </div>
  );
};
