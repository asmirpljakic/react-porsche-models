import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import { cars } from './cars';
import Car from './Car';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function CarList() {
  return (
    <section className='carlist'>
      {cars.map(car => {
        return <Car key={car.id} {...car}></Car>;
      })}
    </section>
  );
}

root.render(<CarList />);
