import React, { useState } from 'react';
import { dataCars } from './dataCars';

const Car = () => {
  const [car, setCar] = useState(dataCars);

  const removeItem = id => {
    console.log(id);
    let newCar = car.filter(car => car.id !== id);
    setCar(newCar);
  };

  return (
    <>
      {car.map(perCar => {
        const { id, img, model, owner } = perCar;

        const clickHandler = e => {
          console.log(e);
          console.log(e.target);
          alert(model);
        };

        const clickHandlerTwo = () => {
          console.log(owner);
          alert(owner);
        };
        return (
          <article key={id} className='car'>
            <img src={img} alt={img} />
            <h2>{model}</h2>
            <h5>{owner.toUpperCase()}</h5>
            <button
              type='button'
              className='btn'
              onClick={clickHandler}
              onMouseOver={() => console.log(model)}
            >
              model
            </button>
            <button type='button' className='btn' onClick={clickHandlerTwo}>
              Owner
            </button>
            <button className='btn' onClick={() => removeItem(id)}>
              remove
            </button>
            <button
              className='btn'
              onClick={() => {
                setCar([]);
              }}
            >
              clear All Cars
            </button>
          </article>
        );
      })}
    </>
  );
};

export default Car;
