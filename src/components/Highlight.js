import React from 'react';

export default function Highlight({children, color, text, block}) {
  return (
    <span
      style={{
        backgroundColor: color,
        borderRadius: '2px',
        display: block ? 'block': 'inline',
        color: '#fff',
        padding: '0.2rem',
        marginBottom: '5px',
        color: text === 'dark' ? '#000' : '#fff'
      }}>
      {children}
    </span>
  );
}