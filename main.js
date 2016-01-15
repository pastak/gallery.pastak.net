'use strict'
require('whatwg-fetch')
const React = require('react')
const ReactDOM = require('react-dom')

fetch('/images.json')
  .then((res) => res.json())
  .then((images) => {
    ReactDOM.render(
      (<div className='image-list'>
        {images.map((image) => {
          return (<div className='image-container'>
            <img src={`/images/${image}`} />
          </div>)
        })}
      </div>),
      document.querySelector('#mainView')
    )
  })
