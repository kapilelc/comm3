'use client';

import React, { useEffect, useState } from 'react';

export const StockPriceFooter: React.FC = () => {
  const [price, setPrice] = useState<string>('Loading...');

  useEffect(() => {
    // Placeholder API call simulation
    const fetchStockPrice = async () => {
      try {
        // Simulate API call
        const fakePrice = '$28';
        setTimeout(() => setPrice(fakePrice), 1000);
      } catch (error) {
        setPrice('Error fetching price');
      }
    };

    fetchStockPrice();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '10px', fontSize: '14px', backgroundColor: '#f8f8f8' }}>
      Stock Price: <strong>{price}</strong>
    </div>
  );
};
