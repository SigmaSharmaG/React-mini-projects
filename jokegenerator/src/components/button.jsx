import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button onClick={props.clickHandler}>Click to Generator Joke</button>
    </div>
  )
}

export default Button