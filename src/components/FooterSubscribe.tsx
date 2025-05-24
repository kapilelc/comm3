import React from 'react';

export const FooterSubscribe: React.FC = () => {
  return (
    <footer style={{ padding: '20px', borderTop: '1px solid #ccc', marginTop: '40px' }}>
      <h3>Subscribe to our newsletter</h3>
      <form>
        <input type="email" placeholder="Your email" required />
        <button type="submit">Subscribe</button>
      </form>
      <div style={{ marginTop: '10px' }}>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};
