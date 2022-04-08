import React, { Component } from 'react'

const Header =  (props) => {
    return (
        <div className='l-box mx-auto'>
            <h1 className='l-baslik'>{props.data.title}</h1>
            <div className='l-line mx-auto'></div>
            <p className='l-text mt-3'>{props.data.description}</p>
        </div>
    )
}

export default Header;
