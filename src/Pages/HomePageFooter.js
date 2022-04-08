import React from 'react'

const HomePageFooter = (props) => {
  return (
    <div>
        <div className='test-note'> {props.footText.textBottom} </div>
        <br />
        <hr />
        <div className='box'> {props.footBox.textBox} </div>
    </div>
  )
}

export default HomePageFooter;