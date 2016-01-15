'use strict'
const React = require('react')
const ReactDOM = require('react-dom')

window.fetch('/images.json')
  .then((res) => res.json())
  .then((images) => {
    ReactDOM.render(
      (<div className='image-list'>
        {images.map((image) => {
          return (<div className='image-container' key={image}>
            <img src={`/images/${image}`} />
          </div>)
        })}
      </div>),
      document.querySelector('#mainView')
    )
  })
