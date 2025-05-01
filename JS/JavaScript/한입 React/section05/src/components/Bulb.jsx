import { useState } from 'react';

export default function Bulb() {
  const [light, setLight] = useState('OFF');
  return (
    <div>
      <div>
        {light === 'OFF' ? (
          <h1 style={{ backgroundColor: 'gray' }}>OFF</h1>
        ) : (
          <h1 style={{ backgroundColor: 'orange' }}>ON</h1>
        )}
      </div>
      <button
        onClick={() => {
          setLight(light === 'OFF' ? 'ON' : 'OFF');
        }}
      >
        전구 {light === 'OFF' ? '켜기' : '끄기'}
      </button>
    </div>
  );
}
