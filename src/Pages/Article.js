import React from 'react'

const Article = (props) => {
  return (
    <div>
       <label htmlFor='name'> {props.formEleman.formTitle} </label> 
       <label htmlFor='email'> {props.formEleman.formEmail} </label> 
       <label htmlFor='phone'> {props.formEleman.formPhone} </label> <br />
    </div>
  )
}

export default Article