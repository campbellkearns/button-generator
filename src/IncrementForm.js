import React from 'react';

const IncrementForm = (props) => {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.increment.value);
    const increment = Number(event.target.increment.value);
    props.handleSubmit(increment);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="number" name="increment"/>
      <button type="submit">Let's Make Some Buttons</button>
    </form>
  )
}

export default IncrementForm;