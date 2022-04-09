import React from 'react'

export default function Modal(props) {



    return (
        <div className='modal-container'>
            <div className='modal'>
                <h1 className='gameover-text'>GAME OVER</h1>
                <button className='close-btn' onClick={props.click}>CLOSE</button>
            </div>
        </div>
    )
}