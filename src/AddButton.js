import React from 'react';

const AddButton = (props) => {
  const onClick = (event) => {
    props.handleClick(props.number)
  }

  return (
  <button type="button" onClick={onClick}>Add {props.number}</button>
  )
}

export default AddButton;