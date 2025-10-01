import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{ padding: 20, color: '#fff', fontFamily: 'sans-serif' }}>
      <h1>AIME Preview</h1>
      <p>Your app will render here. Modify src/main.jsx.</p>
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
