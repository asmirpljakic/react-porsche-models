import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import Car from './Car';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function CarList() {
  return (
    <section>
      <Car />
    </section>
  );
}

root.render(<CarList />);
