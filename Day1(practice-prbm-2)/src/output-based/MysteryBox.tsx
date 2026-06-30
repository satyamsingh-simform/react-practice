import React, { useState, useRef, useEffect } from 'react';

export const MysteryBox: React.FC = () => {
  const [clicks, setClicks] = useState<number>(0);

  const renderCount = useRef<number>(1);
  const latestClicks = useRef<number>(clicks);

  useEffect(() => {
    latestClicks.current = clicks;
  });

  const handleHeavyClick = () => {
    setClicks((prev) => prev + 1);

    setTimeout(() => {
      console.log(`Closure State: ${clicks}`); // 0
      console.log(`Mutable Ref: ${latestClicks.current}`); 
      console.log(`Render Count: ${renderCount.current}`);
      console.log('---');
    }, 3000);
  };

  console.log(
    `Component rendered. Clicks: ${clicks}, Render Count Tracker: ${renderCount.current}`
  );

  renderCount.current += 1;

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={handleHeavyClick}>Click Me</button>
    </div>
  );
};