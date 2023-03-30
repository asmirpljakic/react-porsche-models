import React from 'react';

const Car = ({ img, model, owner }) => {
  const clickHandler = e => {
    console.log(e);
    console.log(e.target);
    alert(model);
  };

  const clickHandlerTwo = owner => {
    console.log(owner);
    alert(owner);
  };

  return (
    <article className='car'>
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
      <button
        type='button'
        className='btn'
        onClick={() => clickHandlerTwo(owner)}
      >
        Owner
      </button>
    </article>
  );
};

export default Car;
